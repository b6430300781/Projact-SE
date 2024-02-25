import React, { useState } from 'react';

function InputNumNisit() {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    document.addEventListener('DOMContentLoaded', function () {
        const inputNumNisit = document.querySelector('.testtable-inputNumNisit input');

        inputNumNisit.addEventListener('change', function () {
            const value = inputNumNisit.value;
            console.log('ค่าที่รับมาจาก input:', value);
        });
    });


    return (
        <div>
            <div style={{ border: 'none' }}>
                <input
                    type="number"
                    min="0"
                    max="60"
                    value={value}
                    onChange={handleChange}
                    style={{ border: 'none' , fontFamily: 'Kanit', height: '20px', width: '80px'}}

                />
            </div>


        </div>
    );
}

export default InputNumNisit;