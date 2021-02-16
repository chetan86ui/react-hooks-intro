import React,{ useState } from 'react'

function BasicForms() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [allEntry,setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {email: email, password: password};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }

    return (
        <>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={ email } onChange={(e) => setemail(e.target.value)} autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)}   autoComplete="off"></input>
            </div>
            <button type="submit">Login Form</button>
        </form>
        <div>
            {
                allEntry.map((currentElement) => {
                    return  (
                        <div>{ currentElement.email}  { currentElement.password} </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default BasicForms
