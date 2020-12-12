import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { detailsCountry, listCountries } from '../../../../actions/Area/countryActions';
import { detailsDivision, listDivisions } from '../../../../actions/Area/divisionActions';
import { detailsDistrict, listDistricts } from '../../../../actions/Area/districtActions';
import { detailsUpozila, listUpozilas } from '../../../../actions/Area/upozilaActions';
import { detailsUnion, listUnions } from '../../../../actions/Area/unionOrWardActions';
import { appSharerProfileDetails, appSharerUpdate } from '../../../../actions/Auth/appSharerActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'


function AppSharerProfileUpdateScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [nominee_PhonNumber, setNominee_PhonNumber] = useState('');
    const [nominee_Name, setNominee_Name] = useState('');
    const [nominee_Relation, setNominee_Relation] = useState('');
    const [countryId, setCountry] = useState('');
    const [divisionId, setDivision] = useState('');
    const [districtId, setDistrict] = useState('');
    const [upozilaId, setUpozila] = useState('');
    const [unionOrWardId, setUnion] = useState('');
    const [postalcode, setPostalCode] = useState('');


    const [uploading, setUploading] = useState(false);

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const profileDetails = useSelector((state) => state.appSharerProfileDetails);
    const { sharer } = profileDetails;

    const countryList = useSelector(state => state.countryList);
    const { countries } = countryList;

    const countryDetails = useSelector((state) => state.countryDetails);
    const { country } = countryDetails;

    const divisionList = useSelector(state => state.divisionList)
    const { divisions } = divisionList

    const divisionDetails = useSelector((state) => state.divisionDetails);
    const { division } = divisionDetails;

    const districtList = useSelector(state => state.districtList)
    const { districts } = districtList

    const districtDetails = useSelector((state) => state.districtDetails);
    const { district } = districtDetails;

    const upozilaList = useSelector(state => state.upozilaList)
    const { upozilas } = upozilaList


    const upozilaDetails = useSelector((state) => state.upozilaDetails);
    const { upozila } = upozilaDetails;

    const unionList = useSelector(state => state.unionList)
    const { unions } = unionList

    const unionDetails = useSelector((state) => state.unionDetails);
    const { union } = unionDetails;

    const dispatch = useDispatch();

    //const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {

        dispatch(listCountries())
        dispatch(listDivisions())
        dispatch(listDistricts())
        dispatch(listUpozilas())
        dispatch(listUnions())

        dispatch(appSharerProfileDetails(userInfo.item1.id));

        dispatch(detailsCountry(userInfo.item1.countryId))
        dispatch(detailsDivision(userInfo.item1.divisionId))
        dispatch(detailsDistrict(userInfo.item1.districtId))
        dispatch(detailsUpozila(userInfo.item1.upozilaId))
        dispatch(detailsUnion(userInfo.item1.unionOrWardId))

        setFirstName(userInfo.item1.firstName)
        setLastName(userInfo.item1.lastName)
        setProfilePhoto(userInfo.item1.profilePhoto)
        setNominee_Name(userInfo.item1.nominee_Name)
        setNominee_PhonNumber(userInfo.item1.nominee_PhonNumber)
        setNominee_Relation(userInfo.item1.nominee_Relation)
        setPostalCode(userInfo.item1.postalCode)

        setCountry(userInfo.item1.countryId)
        setDivision(userInfo.item1.divisionId)
        setDistrict(userInfo.item1.districtId)
        setUpozila(userInfo.item1.upozilaId)
        setUnion(userInfo.item1.unionOrWardId)



        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();

        const userId = userInfo.item1.id;

        dispatch(appSharerUpdate(
            userId,
            firstname,
            lastname,
            profilePhoto,
            nominee_PhonNumber,
            nominee_Name,
            nominee_Relation,
            countryId,
            divisionId,
            districtId,
            upozilaId,
            unionOrWardId,
            postalcode
        ));

        props.history.push("/appsharerprofiledetails");
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
        //make the list empty
        setCountry(e.target.value) // then set the new list into prev variable;
        //make a request with countryId
        //divisions = resultList;
    }
    const saveDivisionHandler = (e) => {
        setDivision(e.target.value);
       //make a request with divisionId
        //districts = resultList;
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
        <div className="container">
            <br />
            {countries && divisions && districts && upozilas && unions && (
                <div className="row">
                    <div className="col-2">

                    </div>
                    <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", padding: "20px" }}>
                        <p style={{ color: "#5cb85c", textAlign: "center" }}>___________________________________________________________</p>
                        <h1 style={{ color: "#5cb85c", textAlign: "center" }}>Update Profile</h1>
                        <p style={{ color: "#5cb85c", textAlign: "center" }}>___________________________________________________________</p>
                        <Form onSubmit={submitHandler}>
                            <div className="row">
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="name"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            First Name
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="text"
                                            name="name"
                                            color="5cb85c"
                                            placeholder="Enter First Name"
                                            size="lg"
                                            value={firstname}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="price"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            Last Name
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Enter Last Name"
                                            size="lg"
                                            value={lastname}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col col-lg-12">
                                    <FormGroup>
                                        <Label
                                            for="profilePhoto"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            Profile Photo
                                    </Label>

                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="text"
                                            name="profilePhoto"
                                            id="profilePhoto"
                                            placeholder="Profile Photo"
                                            size="lg"
                                            value={profilePhoto}
                                            onChange={(e) => setProfilePhoto(e.target.value)}
                                        />
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="file"
                                            label="Yo, pick a file!"
                                            onChange={uploadFileHandler}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="name"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            Nominee Phone Number
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="text"
                                            name="nominee_PhonNumber"
                                            color="5cb85c"
                                            placeholder="Enter Nominee_PhonNumber"
                                            size="lg"
                                            value={nominee_PhonNumber}
                                            onChange={(e) => setNominee_PhonNumber(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>

                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="name"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            Nominee Name
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="text"
                                            name="nominee_PhonNumber"
                                            color="5cb85c"
                                            placeholder="Enter Nominee_PhonNumber"
                                            size="lg"
                                            value={nominee_Name}
                                            onChange={(e) => setNominee_Name(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>

                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="name"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            Nominee Relation
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="text"
                                            name="nominee_PhonNumber"
                                            color="5cb85c"
                                            placeholder="Enter Nominee_PhonNumber"
                                            size="lg"
                                            value={nominee_Relation}
                                            onChange={(e) => setNominee_Relation(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>


                            </div>

                            <div className="row">
                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            Country
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveCountryHandler}
                                        >
                                            <option>{country.name}</option>
                                            {countries.map((country) => (
                                                <option value={country.id}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            Division
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            defaultValue={division.name}
                                            size="lg"
                                            onChange={saveDivisionHandler}
                                        >
                                            <option>{division.name}</option>
                                            {divisions.map((division) => (
                                                <option value={division.id}>
                                                    {division.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            District
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveDistrictHandler}
                                        >
                                            <option>{district.name}</option>
                                            {districts.map((district) => (
                                                <option value={district.id}>
                                                    {district.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            Upozila
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveUpozilaHandler}
                                        >
                                            <option>{upozila.name}</option>
                                            {upozilas.map((upozila) => (
                                                <option value={upozila.id}>
                                                    {upozila.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>

                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            UnionOrWard
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveUnionHandler}
                                        >
                                            <option>{union.name}</option>
                                            {unions.map((union) => (
                                                <option value={union.id}>
                                                    {union.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>

                                <div className="col col-lg-4">
                                    <FormGroup>
                                        <Label
                                            for="name"
                                            style={{ color: "#5cb85c" }}
                                        >
                                            Postal Code
                                    </Label>
                                        <Input
                                            style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                            type="text"
                                            name="postalcode"
                                            color="5cb85c"
                                            placeholder="Enter Postal Code"
                                            size="lg"
                                            value={postalcode}
                                            onChange={(e) => setPostalCode(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <Button style={{
                                color: "#5cb85c"
                            }} outline color="success" size="lg" block type="submit">
                                Update
                       </Button>

                        </Form>
                    </Card>
                    <div className="col-8">




                    </div>
                    <div className="col-2">

                    </div>
                </div>
            )
            }
        </div >
    );
}
export default AppSharerProfileUpdateScreen;

