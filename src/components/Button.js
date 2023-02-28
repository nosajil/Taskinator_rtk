import React from 'react';

export const Button = ({ className, action, children }) => {
    return (
        <button className={className} onClick={action}>
            {children}
        </button>
    )
}
