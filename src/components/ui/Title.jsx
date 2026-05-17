import React from 'react';

const Title = ({className, children}) => {
    return <h1 className={`${className} text-4xl md:text-5xl font-light text-black tracking-tight ${className}`}>
        {children}
    </h1>
};

export default Title;