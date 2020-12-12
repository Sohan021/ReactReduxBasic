import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { appSharerProfileDetails } from '../../../../actions/Auth/appSharerActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button } from 'reactstrap';


function AppSharerDownlineProfileDetailsForAppSharer(props) {

    const id = props.match.params.id;

    const profileDetails = useSelector((state) => state.appSharerProfileDetails);
    const { sharer } = profileDetails;

    console.log("Outside", sharer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appSharerProfileDetails(id));
        console.log("Inside", sharer)
        return () => {
            //
        };
    }, [id]);


    return (<div className="container" style={{ width: "650px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}
    >
        { sharer ? (
            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", }} >
                <br />
                <div className="row">
                    <div className="col-4">
                        <div className="container">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h3 style={{ color: "#5cb85c", textAlign: "center" }}>Name- {sharer.firstName} {sharer.lastName} </h3>
                        </div>
                    </div>
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", }}>
                            <Card.Img
                                variant="top"
                                src={sharer.profilePhoto}
                                height="186px"
                                width="186px"
                            />
                        </Card>
                    </div>
                    <div className="col-4">
                        <div className="container">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h4 style={{ color: "#5cb85c" }}>Phone- {sharer.phoneNumber} </h4>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-6">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", height: "325px" }}>
                            <Card.Body>
                                <p style={{ color: "#5cb85c" }}>________________________________________________</p>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={{ color: "#5cb85c", backgroundColor: "#fff" }}><h4>Total Team Member: {sharer.downlineCount}</h4></ListGroupItem>
                                    <ListGroupItem style={{ color: "#5cb85c", backgroundColor: "#fff" }}><h5>First Level: {sharer.firstLevelDownlineCount}</h5></ListGroupItem>
                                    <ListGroupItem style={{ color: "#5cb85c", backgroundColor: "#fff" }}>Second Level: {sharer.secondLevelDownlineCount}</ListGroupItem>
                                    <ListGroupItem style={{ color: "#5cb85c", backgroundColor: "#fff" }}>Third Level: {sharer.thirdLevelDownlineCount}</ListGroupItem>
                                    <ListGroupItem style={{ color: "#5cb85c", backgroundColor: "#fff" }}>Fourth Level: {sharer.fourthLevelDownlineCount}</ListGroupItem>
                                    <ListGroupItem style={{ color: "#5cb85c", backgroundColor: "#fff" }}>Fifth Level: {sharer.fifthLevelDownlineCount}</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c", height: "325px" }}>
                            <Card.Body>
                                <p style={{ color: "#5cb85c" }}>________________________________________________</p>
                                <ListGroupItem style={{ color: "#5cb85c", backgroundColor: "#fff" }}>
                                    <h4>Address</h4>
                                    <p>______</p>
                                </ListGroupItem>
                                <ListGroupItem style={{ color: "#5cb85c", backgroundColor: "#fff" }}>
                                    <h5>Union/Ward- {sharer.unionOrWardName} </h5>
                                    <h5>Upozila- {sharer.upozilaName}</h5>
                                    <h5>District- {sharer.districtName}</h5>
                                    <h5>Division- {sharer.divisionName}</h5>
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
export default AppSharerDownlineProfileDetailsForAppSharer;
