import { useContext, useState } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import { LoginoutContext } from '../LoginoutContext';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");    
    const [userId, setUserId] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const loginoutContext = useContext(LoginoutContext);    

    function Login() {
        const isCorrectUser = username === "chong";
        const isCorrectPassword = password === "password123";
        setIsLoggedIn(!isLoggedIn);        
        if (isCorrectUser && isCorrectPassword) {
            setUserId(userId+1);
            authContext.setToken('1234');
            loginoutContext.setIsLoggedIn(true);         
            navigate('/Home');            
        }
        else {
            setUsername("");
            setPassword("");
            navigate('/Login');
        }
    }
    
          
    return (
        <Container >
            <Row className="d-flex">
            <Col sm={4}></Col> 
                <Col className="border border-primary rounded m-2 p-2 bg-primary bg-gradient text-white" sm={4}>
                        <h1 className="my-3">Login to your account</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="d-flex text-start">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <Form.Text className="d-flex text-start text-white">
                                Username: chong
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlID="formBasicPassword">
                                <Form.Label className="d-flex text-start">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                /> 
                                <Form.Text className="d-flex text-start text-white">
                                Password: password123
                                </Form.Text>                   
                            </Form.Group>
                            <Button variant="secondary" onClick={Login}>Login</Button>
                        </Form>
                </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
    )
}