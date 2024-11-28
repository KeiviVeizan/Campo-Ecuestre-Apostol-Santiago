// Options.jsx
import React from 'react';

const Options = ({ options, actionProvider }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px 0' }}>
            {options.map((option, index) => (
                <button
                    key={index}
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '10px',
                        cursor: 'pointer',
                    }}
                    onClick={() => actionProvider.handleOption(option.id)}
                >
                    {option.text}
                </button>
            ))}
        </div>
    );
};

export default Options;
