import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Login() {
    const [email, setEmail] = useState(""); // email state
    const [password, setPassword] = useState(""); // password state 
    const [login, setLogin] = useState(false); // register state

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert("Submitted");

        const configuration = {
            method:"post",
            url:"https://auth-server-sigma.vercel.app/login",
            data:{
                email,
                password,
            },
        };

        axios(configuration)
            .then((result) => {
                setLogin(true);
                // set the cookie
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });
                window.location.href = "/auth";

            })
            .catch((error) => {
                error = new Error();
            });

    }

    return (
        <div>
            <h2>Login</h2>
            <Form>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email" 
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    name ="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                </Form.Group>

                {/* submit button */}
                <Button 
                variant="primary" 
                type="submit"
                onClick={(e) => handleSubmit(e)}
                >
                    Login
                </Button>
            </Form>
            {/* display success message */}
            {login ? (
                <p className="text-success">You Are Logged in Successfully</p>
            ) : (
                <p className="text-danger">You Are Not Logged in</p>
            )}

        </div>
    )
}