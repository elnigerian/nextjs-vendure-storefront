import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import { ApolloProvider } from '@apollo/react-common';
import { isServer } from './isServer';
import redirect from './redirect';
import Head from 'next/head';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/link-error';
import Router from 'next/router';

let globalApolloClient: ApolloClient<NormalizedCacheObject> | null = null;
const apiHost = process.env.API_HOST;
const apiPort = process.env.API_PORT;
const shopApiPath = process.env.SHOP_API_PATH;
const adminGraphqlServerURI =
    process.env.NODE_ENV !== 'production'
        ? `${apiHost}:${apiPort}/${shopApiPath}`
        : 'https://server.formiture.co/graphql';

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent: any, { ssr = true } = {}) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }: any) => {
        const client = apolloClient || initApolloClient(apolloState);
        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        );
    };

    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
        const displayName = PageComponent.displayName || PageComponent.name || 'Component';

        if (displayName === 'App') {
            console.warn('This withApollo HOC only works with PageComponents.');
        }

        WithApollo.displayName = `withApollo(${displayName})`;
    }

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async (ctx: any) => {
            const { AppTree } = ctx;

            // Initialize ApolloClient, add it to the ctx object so
            // we can use it in `PageComponent.getInitialProp`.
            const apolloClient = (ctx.apolloClient = initApolloClient({}));

            // Run wrapped getInitialProps methods
            let pageProps = {};
            if (PageComponent.getInitialProps) {
                pageProps = await PageComponent.getInitialProps(ctx);
            }

            // Only on the server:
            if (isServer()) {
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (ctx.res && ctx.res.finished) {
                    return pageProps;
                }

                // Only if ssr is enabled
                if (ssr) {
                    try {
                        // Run all GraphQL queries
                        const { getDataFromTree } = await import('@apollo/react-ssr');
                        await getDataFromTree(
                            <AppTree
                                pageProps={{
                                    ...pageProps,
                                    apolloClient,
                                }}
                            />,
                        );
                    } catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        console.error('Error while running `getDataFromTree`', error);
                        if (error.message.includes('not authenticated')) {
                            redirect(ctx.ctx, '/index');
                        }
                    }

                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    Head.rewind();
                }
            }

            // Extract query data from the Apollo store
            const apolloState = apolloClient.cache.extract();

            return { ...pageProps, apolloState };
        };
    }

    return WithApollo;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState: any) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (isServer()) {
        return createApolloClient(initialState);
    }

    // Reuse client on the client-side
    if (!globalApolloClient) {
        globalApolloClient = createApolloClient(initialState);
    }

    return globalApolloClient;
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param serverAccessToken
 */
function createApolloClient(initialState = {}) {
    const httpLink = new HttpLink({
        uri: adminGraphqlServerURI,
        credentials: 'include',
        fetch,
    });

    const errorLink = onError(({ graphQLErrors, networkError }: any) => {
        if (graphQLErrors) {
            graphQLErrors.map(({ message, locations, path }: any) => {
                console.log(`[GraphQL error]: Message: ${message}, Locations: ${locations}, Path: ${path}`);

                if (!isServer() && message.includes('not authenticated')) {
                    Router.replace('/index');
                }
            });
        }
        if (networkError) {
            console.log(`[Network error]: ${networkError}`);
        }
    });
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new ApolloClient<NormalizedCacheObject>({
        ssrMode: isServer(), // Disables forceFetch on the server (so queries are only run once)
        link: ApolloLink.from([errorLink, httpLink]),
        cache: new InMemoryCache().restore(initialState),
    });
}
