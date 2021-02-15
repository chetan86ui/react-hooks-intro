import React from 'react'

function UseStateObject() {
    const [myObject, setmyObject] = React.useState({
        myName: "chetan",
        myAge: 33,
        degree: "BE"
    });
    const updateObject = () => {
        setmyObject({...myObject, myName:"John"});
    }
    return (
        <div>
            <div>Hello, My name is { myObject.myName } is and age is { myObject.myAge } and my eduction is { myObject.degree }</div>
            <button onClick={ updateObject }>Update</button>
        </div>
    )
}

export default UseStateObject
