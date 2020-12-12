import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { agentRegister } from '../../../../actions/Auth/agentActions';

function AgentAddScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [nid_number, setNid_Number] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [uploading, setUploading] = useState(false);

    const Register = useSelector(state => state.agentAdd);
    const { loading, agentInfo, error } = Register;


    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (agentInfo) {
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [agentInfo]);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(agentRegister(firstname, lastname, mobilenumber, nid_number, postalcode, profilePhoto, password, confirmPassword));
    }

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('profilePhoto', file);
        setUploading(true);
        axios
            .post('/api/agent/savephoto', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setProfilePhoto(response.data);
                setUploading(false);
            })
            .catch((err) => {
                console.log(err);
                setUploading(false);
            });
    };

    return<div className="container">
        <div className="form">
            <form onSubmit={submitHandler} >
                <ul className="form-container">
                    <li>
                        <h2>Create Account</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>


                    <li>
                        <label htmlFor="firstname">
                            First Name
                    </label>
                        <input type="firstname" name="firstname" id="firstname" onChange={(e) => setFirstName(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="lastname">
                            Last Name
                    </label>
                        <input type="lastname" name="lastname" id="lastname" onChange={(e) => setLastName(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="mobilenumber">
                            Mobilenumber
                    </label>
                        <input type="text" name="mobilenumber" id="mobilenumber" onChange={(e) => setMobilenumber(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="nid_number">
                            NID Number
                    </label>
                        <input type="text" name="nid_number" id="nid_number" onChange={(e) => setNid_Number(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="postalcode">
                            Postal Code
                    </label>
                        <input type="text" name="postalcode" id="postalcode" onChange={(e) => setPostalCode(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="image">Profile Photo</label>
                        <input
                            type="text"
                            name="image"
                            value={profilePhoto}
                            id="image"
                            onChange={(e) => setProfilePhoto(e.target.value)}
                        ></input>
                        <input type="file" onChange={uploadFileHandler}></input>
                        {uploading && <div>Uploading...</div>}
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="confirmPassword">Re-Enter Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Register</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
    
}
export default AgentAddScreen;





