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



function AgentProfileDetailsForAdmin(props) {

    const agentId = props.match.params.id;

    // const userSignIn = useSelector((state) => state.userSignIn);
    // const { sharer } = userSignIn;

    const profileDetails = useSelector((state) => state.appSharerProfileDetails);
    const { sharer } = profileDetails;



    console.log("Outside", sharer)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(detailsCountry(sharer.countryId))
        dispatch(detailsDivision(sharer.divisionId))
        dispatch(detailsDistrict(sharer.districtId))
        dispatch(detailsUpozila(sharer.upozilaId))
        dispatch(detailsUnion(sharer.unionOrWardId))

        dispatch(appSharerProfileDetails(agentId));

        console.log("Inside", sharer)
        return () => {
            //
        };
    }, []);
    const handlePassWordChange = () => {
        props.history.push('/passwordupdate');
    }



    return (<div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}
    >
        { sharer ? (
            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000" }} >
                <div className="row">
                    <div className="col-8">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Body>
                                <br />
                                <br />
                                <br />
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff", height: "94px" }}><h3>{sharer.firstName} {sharer.lastName}</h3></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Img
                                variant="top"
                                src={sharer.profilePhoto}
                                height="186px"
                                width="186px"
                            />
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Body>
                                <p style={{ color: "#000" }}>________________________________________________</p>
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff" }}><h4>Phone Number: {sharer.phoneNumber}</h4></Card.Title>
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff" }}><h4>Nid Number: {sharer.nid_Number} 0980349</h4></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Body>
                                <p style={{ color: "#000" }}>________________________________________________</p>
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff" }}><h4>Agent Code: {sharer.agentCode}</h4></Card.Title>
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff" }}><h4>__</h4></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", height: "136px" }}>
                            <Card.Body>
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}>
                                    <h5>Union/Ward- {sharer.unionOrWardName}, Upozila- {sharer.upozilaName}, District- {sharer.districtName}, Division- {sharer.divisionName}</h5>
                                </ListGroupItem>
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
export default AgentProfileDetailsForAdmin;
