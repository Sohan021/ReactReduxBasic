import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { karrotRegister } from '../../../../actions/Auth/karrotActions';


function KarrotRegistrationScreen(props) {

    const [name, setName] = useState('');

    const [mobilenumber, setMobilenumber] = useState('');

    const [email, setEmail] = useState('');

    const [karrotLogo, setKarrotLogo] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Register = useSelector(state => state.karrotAdd);
    const { userinfo } = Register;


    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (userinfo) {
            props.history.push(redirect);
        }

        return () => {
            //
        };
    }, [userinfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(karrotRegister(
            name,
            mobilenumber,
            email,
            karrotLogo,
            password,
            confirmPassword
        ));
    }
    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('profilePhoto', file);
        axios
            .post('/api/admin/savephoto', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setKarrotLogo(response.data);

            })
            .catch((err) => {
                console.log(err);

            });
    };

    return (
        <div className="container" style={{
            backgroundColor: 'black',

        }}>
            {1 && (
                <div className="container">
                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="firstname"
                                        style={{ color: 'white' }}>First Name</Label>
                                    <Input type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter firstname"
                                        size="lg"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock" style={{ color: 'white' }}>Phone Number</Label>
                                    <Input
                                        type="text"
                                        name="countInStock"
                                        id="countInStock"
                                        placeholder="Enter Count in Stock"
                                        size="lg"
                                        value={mobilenumber}
                                        onChange={(e) => setMobilenumber(e.target.value)}
                                    />
                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="email" style={{ color: 'white' }}>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email"
                                        size="lg"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="image" style={{ color: 'white' }}>Phofile Photo Name</Label>
                                    <Input type="text"
                                        name="image"
                                        id="image"
                                        placeholder="Image Name"
                                        size="lg"
                                        value={karrotLogo}
                                        onChange={(e) => setKarrotLogo(e.target.value)}
                                    />
                                    <Input
                                        type="file"
                                        onChange={uploadFileHandler}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="firstname" style={{ color: 'white' }}>Password</Label>
                                    <Input type="password"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter firstname"
                                        size="lg"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="lastname" style={{ color: 'white' }}>Confirm Password</Label>
                                    <Input type="password"
                                        name="price"
                                        id="price"
                                        placeholder="Enter Product Price"
                                        size="lg"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                       </Button>
                    </Form>
                </div>
            )
            }
        </div >
    );
}
export default KarrotRegistrationScreen;



