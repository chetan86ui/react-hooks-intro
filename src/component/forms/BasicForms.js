import React,{ useState } from 'react'

function BasicForms() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [allEntry,setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        if (email && password) {
            const newEntry = {id: new Date().getTime().toString(), email, password};
            setAllEntry([...allEntry, newEntry]);
            console.log(allEntry);

            setemail('');
            setpassword('');
        } else {
            alert("Please fill data");
        }
        
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
                    const {id,email,password} = currentElement;
                    return  (
                        <div key={id}>{ email}  { password} </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default BasicForms
