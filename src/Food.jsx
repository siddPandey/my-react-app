import React from 'react'

function Food(propx) {
    const food1 = "Apple";
    const food2 = "Orange";

    return (
        <ul>
            <li>{food1}</li>
            <li>Mango {propx.brand}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food