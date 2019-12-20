import React, { useEffect } from 'react';

const Test = () => {
    const test111 = () => {
        return 0;
    };

    const test2 = (event) => {};

    useEffect(() => console.log('mounted'), []);

    useEffect(() => {
        return () => {
            console.log('will unmont test');
        };
    }, []);
    return <h1>Tesdakljdslakja gkjgjkgjgkj s</h1>;
};

export default Test;
