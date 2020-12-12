import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SignIn } from '../../../../actions/Auth/signInActions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';



function SigninScreen(props) {


    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const userSignIn = useSelector(state => state.userSignIn);

    const dispatch = useDispatch();

    //const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(SignIn(mobilenumber, password));

        props.history.push("/");


    }



    return (
        <div className="content" style={{ backgroundColor: "#fff" }}>

            <div className="container" style={{ width: 475, height: 400, marginTop: 60, backgroundColor: "#0C373A" }}>
                <br />
                <br />
                <br />
                <p style={{ color: "#06E2FF", textAlign: "center" }}>___________________________________________________________</p>
                <h1 style={{ color: "#06E2FF", textAlign: "center" }}>Sign In</h1>
                <p style={{ color: "#06E2FF", textAlign: "center" }}>___________________________________________________________</p>

                <Form

                    onSubmit={submitHandler}
                >
                    <div

                        style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
                    >

                        <FormGroup >
                            <Label
                                for="name"
                                style={{ color: "#06E2FF" }}
                            >
                                Phone Number
                                    </Label>
                            <Input
                                style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}
                                type="text"
                                name="name"
                                color="06E2FF"
                                placeholder="Enter Your Phone Number"
                                size="lg"
                                value={mobilenumber}
                                onChange={(e) => setMobilenumber(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup >
                            <Label
                                for="password"
                                style={{ color: "#06E2FF" }}
                            >
                                Password
                                    </Label>
                            <Input
                                style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}
                                type="password"
                                name="name"
                                color="06E2FF"
                                placeholder="Enter Password"
                                size="lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                    </div>

                    <Button
                        style={{
                            color: "#06E2FF",
                        }}
                        outline color="primary" size="lg" block type="submit">
                        SignIn
                    </Button>
                    <Button
                        style={{
                            color: "#06E2FF"
                        }}
                        outline color="primary" size="lg" block type="submit">
                        <a href="/shoperregistration">Create Shopper Account?</a>
                    </Button>




                </Form>

            </div>



        </div >
    )
}
export default SigninScreen;