import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        // try {

        //     await axios.post("http://localhost:8000/signup", {
        //         email, password, name
        //     })
        //         .then(res => {

        //             if (res.data == "exist") {
        //                 alert("User already exists")
        //             }
        //             else if (res.data == "notexist") {
        //                 history("/home", { state: { id: email } })
        //             }
        //             else {
        //                 alert("fill the following data")
        //             }
        //         })
        //         .catch(e => {
        //             alert("wrong details")
        //             console.log(e);
        //         })

        // }
        // catch (e) {
        //     console.log(e);

        // }

    }


    return (
        <div className="login">


            <div className="form_login">
                <form action="POST">
                    <h1>Create Account</h1>
                    <p className="loginLogo"><img src="imdb-logo.png" alt="" /></p>
                    <input type="Text" onChange={(e) => { setName(e.target.value) }} placeholder="name" />
                    <br />
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <br />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <br />
                    <button onClick={(e) => submit(e)} >Submit</button>

                    <br />
                    <p>OR</p>
                    <br />
                    <button className="btn1"><Link to="/">Login</Link></button>


                </form>
                <div className="login_illustrator">
                    <img src="bg.png" alt="" />
                </div></div>


        </div>
    )
}

export default Login