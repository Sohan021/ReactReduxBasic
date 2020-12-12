import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { adminUpdate } from '../../../../actions/Auth/adminActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { listCountries } from '../../../../actions/Area/countryActions';
import { listDivisions } from '../../../../actions/Area/divisionActions';
import { listDistricts } from '../../../../actions/Area/districtActions';
import { listUpozilas } from '../../../../actions/Area/upozilaActions';
import { listUnions } from '../../../../actions/Area/unionOrWardActions';


function AdminProfileUpdateScreen(props) {

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


    const [uploading, setUploading] = useState(false);

    const adminSignin = useSelector((state) => state.adminSignin);
    const { adminInfo } = adminSignin;

    const Register = useSelector(state => state.adminRegistration);
    const { loading, userInfo, error } = Register;

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
        if (userInfo) {
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
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();

        const currentuser = adminInfo.item1.id;
        debugger
        dispatch(adminUpdate(
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
        setUploading(true);
        axios
            .post('/api/admin/savephoto', bodyFormData, {
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
        <div className="content content-margined">
            {countries && divisions && districts && upozilas && unions && (
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
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock">Nid Number</Label>
                                    <Input
                                        type="text"
                                        name="productCode"
                                        id="productCode"
                                        placeholder="Enter Product Code"
                                        size="lg"
                                        value={nid_number}
                                        readOnly
                                        onChange={(e) => setNid_Number(e.target.value)}
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
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock">Postal Code</Label>
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
                                    <Label for="image">Phofile Photo Name</Label>
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
                                    <Label for="exampleSelect">Select Country</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        readOnly
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
                                    <Label for="exampleSelect">Select Division</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        readOnly
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
                                    <Label for="exampleSelect">Select District</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        readOnly
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
                                    <Label for="exampleSelect">Select Upozila</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        readOnly
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
                                    <Label for="exampleSelect">Select Union</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        readOnly
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
export default AdminProfileUpdateScreen;

