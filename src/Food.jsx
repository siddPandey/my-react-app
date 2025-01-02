import React from 'react'

function Food({ brand }) { // Destructure props and rename to 'props'
    const food1 = "Apple";
    const food2 = "Orange";

    return (
        <ul>
            <li>{food1}</li>
            <li>Mango {brand}</li> {/* Use destructured 'brand' */}
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food