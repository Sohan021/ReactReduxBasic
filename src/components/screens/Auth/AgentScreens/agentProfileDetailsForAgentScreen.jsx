import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appSharerProfileDetails } from '../../../../actions/Auth/appSharerActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { detailsCountry } from '../../../../actions/Area/countryActions';
import { detailsDivision } from '../../../../actions/Area/divisionActions';
import { detailsDistrict } from '../../../../actions/Area/districtActions';
import { detailsUpozila } from '../../../../actions/Area/upozilaActions';
import { detailsUnion } from '../../../../actions/Area/unionOrWardActions';
import { Button } from 'reactstrap';



function AgentProfileDetailsForAgent(props) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const profileDetails = useSelector((state) => state.appSharerProfileDetails);
    const { sharer } = profileDetails;

    const countryDetails = useSelector((state) => state.countryDetails);
    const { country } = countryDetails;

    const divisionDetails = useSelector((state) => state.divisionDetails);
    const { division } = divisionDetails;

    const districtDetails = useSelector((state) => state.districtDetails);
    const { district } = districtDetails;

    const upozilaDetails = useSelector((state) => state.upozilaDetails);
    const { upozila } = upozilaDetails;

    const unionDetails = useSelector((state) => state.unionDetails);
    const { union } = unionDetails;

    console.log("Outside", sharer)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(detailsCountry(sharer.countryId))
        dispatch(detailsDivision(sharer.divisionId))
        dispatch(detailsDistrict(sharer.districtId))
        dispatch(detailsUpozila(sharer.upozilaId))
        dispatch(detailsUnion(sharer.unionOrWardId))

        dispatch(appSharerProfileDetails(userInfo.item1.id));

        console.log("Inside", sharer)
        return () => {
            //
        };
    }, []);
    const handlePassWordChange = () => {
        props.history.push('/passwordupdate');
    }

    // return (



    //     <div
    //         className="container"
    //         style={{
    //             width: "876px",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             textAlign: "center",
    //             marginTop: "60px"
    //         }}
    //     >
    //         <Card style={{ color: "#06E2FF", backgroundColor: "#0C373A" }} >

    //             <div className="row">
    //                 <div className="col-8">
    //                     <Card.Body>
    //                         <br />
    //                         <br />
    //                         <br />
    //                         <Card.Title><h3>{sharer.firstName} {sharer.lastName}</h3></Card.Title>
    //                     </Card.Body>
    //                 </div>
    //                 <div className="col-4">
    //                     <Card.Img
    //                         variant="top"
    //                         src={sharer.profilePhoto} />
    //                 </div>
    //             </div>

    //             <div className="row">
    //                 <div className="col-6">
    //                     <Card.Body>
    //                         <p style={{ color: "#06E2FF" }}>________________________________________________</p>
    //                         <Card.Title><h4>Phone Number: {sharer.phoneNumber}</h4></Card.Title>
    //                     </Card.Body>
    //                 </div>
    //                 <div className="col-6">
    //                     <Card.Body>
    //                         <p style={{ color: "#06E2FF" }}>________________________________________________</p>
    //                         <Card.Title><h4>Nid Number: {sharer.nid_Number}</h4></Card.Title>
    //                     </Card.Body>
    //                 </div>
    //             </div>

    //             <div className="row">
    //                 <div className="col-6">
    //                     <Card.Body>
    //                         <p style={{ color: "#06E2FF" }}>________________________________________________</p>
    //                         <Card.Title><h4>Agent Code: {sharer.agentCode}</h4></Card.Title>
    //                     </Card.Body>
    //                 </div>
    //                 <div className="col-6">
    //                     <Card.Body>
    //                         <p style={{ color: "#06E2FF" }}>________________________________________________</p>
    //                     </Card.Body>
    //                 </div>
    //             </div>

    //             <div className="row">
    //                 <div className="col-6">
    //                     <Card.Body>
    //                         <p style={{ color: "#06E2FF" }}>________________________________________________</p>
    //                         <ListGroup className="list-group-flush">
    //                             <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Union/Ward: {union.name}</ListGroupItem>
    //                             <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Upozila: {upozila.name}</ListGroupItem>
    //                             <ListGroupItem style={{ backgroundColor: "#0C373A" }}>District: {district.name}</ListGroupItem>
    //                             <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Division: {division.name}</ListGroupItem>
    //                             <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Country: {country.name}</ListGroupItem>
    //                         </ListGroup>
    //                     </Card.Body>
    //                 </div>
    //                 <div className="col-6">
    //                     <div className="row">
    //                         <Card.Body>
    //                             <p style={{ color: "#06E2FF" }}>________________________________________________</p>
    //                             <Card.Link href="/appsharerprofileupdate">Update Your Profile</Card.Link>
    //                         </Card.Body>
    //                     </div>
    //                     <div className="row">
    //                         <Card.Body>
    //                             <p style={{ color: "#06E2FF" }}>________________________________________________</p>
    //                             <Card.Link href="/passwordupdate">Change Password?</Card.Link>
    //                             <a href="/appsharerprofileupdate">Update Your Profile</a>
    //                         </Card.Body>
    //                     </div>
    //                     <div className="row">
    //                         <Card.Body>
    //                             <p style={{ color: "#06E2FF" }}>________________________________________________</p>
    //                             <Card.Link href="#">Change Phone Number</Card.Link>
    //                         </Card.Body>
    //                     </div>
    //                     <div className="row">
    //                         <Card.Body>
    //                             <p style={{ color: "#06E2FF" }}>________________________________________________</p>
    //                             <Card.Link href="#">Change Email</Card.Link>
    //                         </Card.Body>
    //                     </div>
    //                 </div>
    //             </div>

    //         </Card>
    //     </div>
    // );


    return (<div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}
    >
        { userInfo ? (
            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c" }} >
                <div className="row">
                    <div className="col-8">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", }}>
                            <Card.Body>
                                <br />
                                <br />
                                <br />
                                <Card.Title style={{ color: "#5cb85c", backgroundColor: "#fff", height: "97px" }}><h3>{userInfo.item1.firstName} {userInfo.item1.lastName}</h3></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", }}>
                            <Card.Img
                                variant="top"
                                src={userInfo.item1.profilePhoto}
                                height="186px"
                                width="186px"
                            />
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", }}>
                            <Card.Body>
                                <p style={{ color: "#5cb85c" }}>________________________________________________</p>
                                <Card.Title style={{ color: "#5cb85c", backgroundColor: "#fff" }}><h4>Phone Number: {userInfo.item1.phoneNumber}</h4></Card.Title>
                                <Card.Title style={{ color: "#5cb85c", backgroundColor: "#fff" }}><h4>Nid Number: {userInfo.item1.nid_Number} 0980349</h4></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", }}>
                            <Card.Body>
                                <p style={{ color: "#5cb85c" }}>________________________________________________</p>
                                <Card.Title style={{ color: "#5cb85c", backgroundColor: "#fff" }}><h4>Agent Code: {userInfo.item1.agentCode}</h4></Card.Title>

                                <Card.Title style={{ color: "#5cb85c", backgroundColor: "#fff" }}><h4>__</h4></Card.Title>
                            </Card.Body>
                        </Card>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", height: "136px" }}>
                            <Card.Body>
                                <ListGroupItem style={{ color: "#5cb85c", backgroundColor: "#fff" }}>
                                    <h5>Union/Ward- {userInfo.item1.unionOrWardName}, Upozila- {userInfo.item1.upozilaName}, District- {userInfo.item1.districtName}, Division- {userInfo.item1.divisionName}</h5>
                                </ListGroupItem>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", }}>
                            <Card.Body>
                                <Button
                                    color="success"
                                    size="lg"
                                    block
                                    type="submit"
                                    width="30px"
                                    onClick={handlePassWordChange}
                                >
                                    Change Password?
                            </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", }}>
                            <Card.Body>
                                <Button
                                    color="success"
                                    size="lg"
                                    block
                                    type="submit"
                                    width="30px"
                                    onClick={handlePassWordChange}
                                >
                                    Change Phone Number?
                            </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", }}>
                            <Card.Body>
                                <Button
                                    color="success"
                                    size="lg"
                                    block
                                    type="submit"
                                    width="30px"
                                    onClick={handlePassWordChange}
                                >
                                    Change Email?
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Card>

        ) : (
                <h1></h1>
            )
        }
    </div >
    );
}
export default AgentProfileDetailsForAgent;
