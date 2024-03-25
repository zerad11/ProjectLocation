import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange }) => {
    return (
        <input
            className='auth'
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
