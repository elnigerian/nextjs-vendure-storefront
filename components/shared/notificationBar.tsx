import * as React from 'react';

type NotificationBarProps = {
    notification?: string;
};
const NotificationBar: React.FC<NotificationBarProps> = ({ notification = 'Welcome to Vendure!!' }: any) => {
    return (
        <React.Fragment>
            <div className="h-8 bg-gray-900 text-white font-roboto-sans font-medium text-sm">
                <p className="text-center py-1">{notification}</p>
            </div>
        </React.Fragment>
    );
};

export default NotificationBar;
