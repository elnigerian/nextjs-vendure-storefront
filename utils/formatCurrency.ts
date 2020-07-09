export const formatCurrency = (currency: string, amount: number) => {
    return currency + (amount/100).toFixed(2);
}
