import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' 

const SignUp = () => {
    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("")
    const [ email, setEmail ] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('user') 
        if(auth){
            navigate('/')
        }
    })

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type':'application/json'
            },
        })
        result = await result.json()
        console.warn(result);
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/', { replace: true });
        // if (result) {
        //     // navigate(to='/')   // not working
        //     navigate('/', { replace: true });
        // }
    }

    return(
        <div className='register'>
            <h1>Register</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} className='inputBox' type='text' placeholder='Enter Name'/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='inputBox' type='text' placeholder='Enter Email'/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='inputBox' type='password' placeholder='Password'/> 

            <button onClick={collectData} className='btn' type='button'>Sign Up</button>
        </div>
    )
}

export default SignUp;