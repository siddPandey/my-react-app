import React from 'react'

function Food({ brand }) { // Destructure props and rename to 'props'
    const food1 = "Apple";
    const food2 = "Orange";
    const shoot = () => {
        
        alert("Great Shot!");
      }
    return (
        <ul>
            <li><a onClick={shoot}>{food1}</a></li>
            <li>Mango {brand}</li> {/* Use destructured 'brand' */}
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food