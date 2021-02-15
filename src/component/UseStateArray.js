import React, { useState } from 'react'

const UseStateArray = () => {
    
    const bioData = [
        {
            id: 0,
            myName: 'Chetan',
            age: 30
        },
        {
            id: 1,
            myName: 'chauhan',
            age: 30
        }
    ];
    const [myData, setMyData] = useState(bioData)
    const clearData = () => {
        setMyData([]);
    }

    return (
        <>
          { 
            myData.map((currentElement) => {
            return <div key={ currentElement.id }>My Name is {currentElement.myName} and my age is { currentElement.age }</div>
            })
          }
          <button onClick={ clearData }>Clear</button>
        </>
    )
}

export default UseStateArray
