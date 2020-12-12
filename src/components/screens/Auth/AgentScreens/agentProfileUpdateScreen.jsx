import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { agentUpdate } from '../../../../actions/Auth/agentActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


function AgentProfileUpdateScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');

    const agentSignin = useSelector((state) => state.agentSignin);
    const { agentInfo } = agentSignin;



    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
debugger
        setFirstName(agentInfo.item1.firstName)
        setLastName(agentInfo.item1.lastName)
        setProfilePhoto(agentInfo.item1.profilePhoto)
        setEmail(agentInfo.item1.email)
        setMobilenumber(agentInfo.item1.mobilenumber)
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const currentuser = agentInfo.item1.id;
        dispatch(agentUpdate(
            currentuser,
            firstname,
            lastname,
            profilePhoto,
            email,
            mobilenumber,
        ));
    }

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('profilePhoto', file);

        axios
            .post('/api/agent/savephoto', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setProfilePhoto(response.data);

            })
            .catch((err) => {
                console.log(err);

            });
    };

    return (
        <div className="content content-margined">
            {agentInfo && (
                <div className="container">
                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="firstname">First Name</Label>
                                    <Input type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter firstname"
                                        size="lg"
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="lastname">Last Name</Label>
                                    <Input type="text"
                                        name="price"
                                        id="price"
                                        placeholder="Enter Product Price"
                                        size="lg"
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock">Phone Number</Label>
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
                                    <Label for="countInStock">Email</Label>
                                    <Input
                                        type="text"
                                        name="productCode"
                                        id="productCode"
                                        placeholder="Enter Product Code"
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
                                    <Label for="image">Profile Photo Name</Label>
                                    <Input type="text"
                                        name="image"
                                        id="image"
                                        placeholder="Image Name"
                                        size="lg"
                                        value={profilePhoto}
                                        onChange={(e) => setProfilePhoto(e.target.value)}
                                    />
                                    <Input
                                        type="file"
                                        onChange={uploadFileHandler}
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
export default AgentProfileUpdateScreen;

