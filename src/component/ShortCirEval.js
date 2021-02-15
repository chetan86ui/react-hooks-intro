import React from 'react'

function ShortCirEval() {
    const [state, setstate] = React.useState('');
    return (
        <div>
            <div>Hello Short Circut || { state ||
                <>
                hello from else part
                </>
             } </div>
            <div>Hello Short Circut && { state && 'chetan'} </div>
        </div>
    )
}

export default ShortCirEval
