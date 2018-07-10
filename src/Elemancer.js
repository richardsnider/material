import React from 'react';

export const html = (params) => {
    const component = params.component || 'div';
    delete params.component;

    let children = params.children;
    delete params.children;

    let props = Object.assign(params) || null;

    
    if(typeof children === 'object' && !Array.isArray(children)) {
        children = [ children ]

        children.forEach(element => {
            if(
                element !== undefined &&
                typeof element === 'object'
            ) {
                children = html(children);
            }
        });
    }

    return React.createElement(
        component,
        props,
        children
    );
};