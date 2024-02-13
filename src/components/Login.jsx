import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./Login.css"


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        // try {

        //     await axios.post("http://localhost:8000/", {
        //         email, password
        //     })
        //         .then(res => {
        //             if (res.data == "exist") {
        //                 history("/home", { state: { id: email } })
        //             }

        //             else if (res.data == "notexist") {
        //                 alert("User have not sign up")
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
                    <h1>Login</h1>
                    <p className="loginLogo"><img src="imdb-logo.png" alt="" /></p>
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <br />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <br />
                    <button onClick={(e) => submit(e)} >Submit</button>

                    <br />
                    <p>OR</p>
                    <br />
                    <button className="btn1"><Link to="/signup">Signup</Link></button>


                </form>
                <div className="login_illustrator">
                    <img src="bg.png" alt="" />
                </div></div>


        </div>
    )
}

export default Login