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

    const deleteElement = (id) => {
        const newArray = myData.filter( (currentElement) => {
            return currentElement.id !== id;
        })
        setMyData(newArray);
    }

    return (
        <>
          { 
            myData.map((currentElement) => {
            return (
                <div className="list" key={ currentElement.id }>
                    My Name is {currentElement.myName} and my age is { currentElement.age } 
                    <button onClick={ () => deleteElement(currentElement.id) }>delete</button>
                </div>
                );
            })
          }
          <button onClick={ clearData }>Clear</button>
        </>
    )
}

export default UseStateArray
