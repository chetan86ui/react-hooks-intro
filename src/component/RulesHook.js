import React from 'react';

const RulesHook = () => {
    const [myName, setMyName] = React.useState('hello chetan');
    const [buttonName, setButtonName] = React.useState('Click Here');
    const changeName = () => {
    if (myName === 'hello chetan') {
        setMyName('welcome chetan');
        setButtonName('Edit');
    }
    if (myName === 'welcome chetan') {
        setMyName('hello chetan');
        setButtonName('Click Here');
    }
  }
    return (
        <div>
            <h1>{ myName }</h1>
            <button className="btn" onClick={ changeName } >{ buttonName }</button>
        </div>
    )
}

export default RulesHook

