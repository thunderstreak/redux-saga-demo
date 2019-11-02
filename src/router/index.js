import React from 'react';
import Loadable from 'react-loadable';

const Loading = ({isLoading, error}) => {
    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};

export default {
    Counter: Loadable({
        loader  :() => import('../components/Counter'),
        loading :Loading,
        delay   : 300
    }),
    User: Loadable({
        loader  :() => import('../components/User'),
        loading :Loading,
        delay   : 300
    }),

};

