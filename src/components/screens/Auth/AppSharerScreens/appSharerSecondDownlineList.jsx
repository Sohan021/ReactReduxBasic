import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo,
    faEdit,
    faTrash,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { appSharerFirstDownlineList } from '../../../../actions/Auth/appSharerActions';

const SecondDownlineListForAppSharerScreen = (props) => {

    const id = props.match.params.id;

    const appSharersGetFirstDownlineList = useSelector((state) => state.appSharerGetFirstDownlineList)
    const { downlines } = appSharersGetFirstDownlineList;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(appSharerFirstDownlineList(id))

        return () => {
            //
        };
    }, [id]);

    const handleProfileDetails = (id) => {
        props.history.push('/appsharerdownlineprofiledetails/' + id);
    }

    return (
        <>
            <div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }} className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}>
                <br />
                <br />
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <Card style={{ height: "50px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                Second Level
                            </Card>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <br />
                <br />
                {downlines ? (
                    <Card>
                        <div className="row">
                            {downlines.map((downline) => (
                                <div className="col-4">
                                    <Card style={{ color: "#000", backgroundColor: "#fff", borderColor: "#5cb85c" }} height="200px">
                                        <div className="row">
                                            <div className="container">
                                                <Card.Img variant="top" width="160px" height="200px" src={downline.profilePhoto} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <Card >
                                                    <Card.Body>
                                                        <ListGroup className="list-group-flush">
                                                            <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {downline.firstName} {downline.lastName}</h4></ListGroupItem>
                                                            <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {downline.phoneNumber}</h4></ListGroupItem>
                                                        </ListGroup>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <Card>
                                                    <Card.Body>
                                                        <Button
                                                            style={{
                                                                color: "#06E2FF",
                                                            }}
                                                            outline color="info" size="lg" block type="submit"
                                                            onClick={() => handleProfileDetails(downline.id)}
                                                        >
                                                            Profile
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <Card>
                                                    <Card.Body>
                                                        <Link to={"appsharerthirddownlinelist/" + downline.id}>
                                                            <Button
                                                                style={{
                                                                    color: "#06E2FF",
                                                                }}
                                                                outline color="success" size="lg" block type="submit"
                                                            >
                                                                Downlines
                                                        </Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>
                                    </Card>
                                    <br />
                                    <br />
                                </div>
                            ))}
                        </div>
                    </Card>


                ) : (
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-4"></div>
                                <div className="col-4">
                                    <Card style={{ height: "50px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                        Your Second Level Still Empty
                                    </Card>
                                </div>
                                <div className="col-4"></div>
                            </div> */}
                        </div>
                    )}
            </div>
        </>
    );
};

export default SecondDownlineListForAppSharerScreen;

