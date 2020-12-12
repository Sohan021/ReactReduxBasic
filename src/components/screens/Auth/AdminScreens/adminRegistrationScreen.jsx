import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { adminRegister } from '../../../../actions/Auth/adminActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { listCountries } from '../../../../actions/Area/countryActions';
import { listDivisions } from '../../../../actions/Area/divisionActions';
import { listDistricts } from '../../../../actions/Area/districtActions';
import { listUpozilas } from '../../../../actions/Area/upozilaActions';
import { listUnions } from '../../../../actions/Area/unionOrWardActions';


function AdminRegistrationScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [nid_number, setNid_Number] = useState('');
    const [email, setEmail] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [countryId, setCountry] = useState('');
    const [divisionId, setDivision] = useState('');
    const [districtId, setDistrict] = useState('');
    const [upozilaId, setUpozila] = useState('');
    const [unionOrWardId, setUnion] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Register = useSelector(state => state.adminRegistration);
    const { userinfo } = Register;

    const countryList = useSelector(state => state.countryList);
    const { countries } = countryList;

    const divisionList = useSelector(state => state.divisionList)
    const { divisions } = divisionList

    const districtList = useSelector(state => state.districtList)
    const { districts } = districtList

    const upozilaList = useSelector(state => state.upozilaList)
    const { upozilas } = upozilaList

    const unionList = useSelector(state => state.unionList)
    const { unions } = unionList

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (userinfo) {
            props.history.push(redirect);
        }
        dispatch(listCountries())
        dispatch(listDivisions())
        dispatch(listDistricts())
        dispatch(listUpozilas())
        dispatch(listUnions())
        return () => {
            //
        };
    }, [userinfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(adminRegister(
            firstname,
            lastname,
            mobilenumber,
            nid_number,
            email,
            postalcode,
            profilePhoto,
            countryId,
            divisionId,
            districtId,
            upozilaId,
            unionOrWardId,
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
                setProfilePhoto(response.data);

            })
            .catch((err) => {
                console.log(err);

            });
    };
    const saveCountryHandler = (e) => {
        setCountry(e.target.value);
    }
    const saveDivisionHandler = (e) => {
        setDivision(e.target.value);
    }
    const saveDistrictHandler = (e) => {
        setDistrict(e.target.value);
    }
    const saveUpozilaHandler = (e) => {
        setUpozila(e.target.value);
    }
    const saveUnionHandler = (e) => {
        setUnion(e.target.value)
    }
    return (
        <div className="container" style={{
            backgroundColor: 'black',

        }}>
            {countries && divisions && districts && upozilas && unions && (
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
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="lastname" style={{ color: 'white' }}>Last Name</Label>
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
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock" style={{ color: 'white' }}>Nid Number</Label>
                                    <Input
                                        type="text"
                                        name="productCode"
                                        id="productCode"
                                        placeholder="Enter Product Code"
                                        size="lg"
                                        value={nid_number}
                                        onChange={(e) => setNid_Number(e.target.value)}
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
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock" style={{ color: 'white' }}>Postal Code</Label>
                                    <Input
                                        type="text"
                                        name="productCode"
                                        id="productCode"
                                        placeholder="Enter Product Code"
                                        size="lg"
                                        value={postalcode}
                                        onChange={(e) => setPostalCode(e.target.value)}
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
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="exampleSelect" style={{ color: 'white' }}>Select Country</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={saveCountryHandler}
                                    >
                                        <option>Select Country</option>
                                        {countries.map((country) => (

                                            <option value={country.id}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="exampleSelect" style={{ color: 'white' }}>Select Division</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={saveDivisionHandler}
                                    >
                                        <option>Select Division</option>
                                        {divisions.map((division) => (
                                            <option value={division.id}>
                                                {division.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="exampleSelect" style={{ color: 'white' }}>Select District</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={saveDistrictHandler}
                                    >
                                        <option>Select District</option>
                                        {districts.map((district) => (

                                            <option value={district.id}>
                                                {district.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="exampleSelect" style={{ color: 'white' }}>Select Upozila</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={saveUpozilaHandler}
                                    >
                                        <option>Select Division</option>
                                        {upozilas.map((upozila) => (
                                            <option value={upozila.id}>
                                                {upozila.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="exampleSelect" style={{ color: 'white' }}>Select Union</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={saveUnionHandler}
                                    >
                                        <option>Select Country</option>
                                        {unions.map((union) => (

                                            <option value={union.id}>
                                                {union.name}
                                            </option>
                                        ))}
                                    </Input>
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
export default AdminRegistrationScreen;





{/* <form onSubmit={submitHandler} >
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
        </form> */}

