import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { appSharerProfileDetails, appSharerRegister } from '../../../../actions/Auth/appSharerActions';

function AppSharerAddDownlineScreen(props) {


    const [mobilenumber, setMobilenumber] = useState('');
    const [nid_Number, setNid_Number] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Register = useSelector(state => state.appSharerAddDownline);
    const { loading, error } = Register;


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;


    const profileDetails = useSelector((state) => state.appSharerProfileDetails);
    const { sharer } = profileDetails;

    const downlineCount = userInfo.item1.downlineCount;


    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        dispatch(appSharerProfileDetails(userInfo.item1.id));
        return () => {
            //
        };
    }, []);


    const submitHandler = (e) => {
        e.preventDefault();
        const currentuser = userInfo.item1.id;

        dispatch(appSharerRegister(mobilenumber, nid_Number, currentuser, password, confirmPassword));

    }

    return <>
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {sharer.firstLevelDownlineCount >= 5 && sharer ? (
                <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                    Your Downline Limition Is Over
                </Card>
            ) : (
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-6">
                            <Card style={{ padding: "10px", borderColor: "#5cb85c" }}>
                                <div className="row">
                                    <div className="col-2">

                                    </div>
                                    <div className="col-8">
                                        <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                            You Can share your app more {5 - sharer.firstLevelDownlineCount} people
                                        </Card>
                                        <br />
                                        <br />
                                        <Form
                                            onSubmit={submitHandler}
                                        >
                                            <div
                                                style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
                                            >
                                                <FormGroup >
                                                    <Label
                                                        for="phoneNumber"
                                                        style={{ color: "#5cb85c" }}
                                                    >
                                                        Phone Number
                                                </Label>
                                                    <Input
                                                        style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                        type="text"
                                                        name="phoneNumber"
                                                        color="06E2FF"
                                                        placeholder="Enter Phone Number"
                                                        size="lg"
                                                        value={mobilenumber}
                                                        onChange={(e) => setMobilenumber(e.target.value)}
                                                    />
                                                </FormGroup>
                                                <FormGroup >
                                                    <Label
                                                        for="password"
                                                        style={{ color: "#5cb85c" }}
                                                    >
                                                        Nid Number
                                                </Label>
                                                    <Input
                                                        style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                        type="text"
                                                        name="nid_Number"
                                                        color="06E2FF"
                                                        placeholder="Enter Nid Number"
                                                        size="lg"
                                                        value={nid_Number}
                                                        onChange={(e) => setNid_Number(e.target.value)}
                                                    />
                                                </FormGroup>
                                                <FormGroup >
                                                    <Label
                                                        for="password"
                                                        style={{ color: "#5cb85c" }}
                                                    >
                                                        New Password
                                                </Label>
                                                    <Input
                                                        style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                        type="password"
                                                        name="newPassword"
                                                        color="06E2FF"
                                                        placeholder="Enter Password"
                                                        size="lg"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </FormGroup>
                                                <FormGroup >
                                                    <Label
                                                        for="password"
                                                        style={{ color: "#5cb85c" }}
                                                    >
                                                        Confirm Password
                                                </Label>
                                                    <Input
                                                        style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                        type="password"
                                                        name="confirmPassword"
                                                        color="06E2FF"
                                                        placeholder="Re-EnterPassword"
                                                        size="lg"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </div>

                                            <Button
                                                style={{
                                                    color: "#06E2FF",
                                                }}
                                                outline color="success" size="lg" block type="submit">
                                                Add
                                                </Button>

                                        </Form>
                                    </div>
                                    <div className="col-2">

                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>)}
        </div>
    </>

}
export default AppSharerAddDownlineScreen;





