import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { listPaymentsAppSharer } from '../../../../../actions/Fund/paymentActions';
import { fundAppSharers } from '../../../../../actions/Fund/fundActions';


const FundAppSharerForAppSharerScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const fundAppSharer = useSelector((state) => state.fundAppSharer)
    const { fund } = fundAppSharer;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundAppSharers(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);


    return (

        <div className="container" style={{ justifyContent: "center", alignItems: "center" }}>
            <br />
            <br />
            <br />
            <br />
            <div className="row"> 
            
            <div className="col-3">

            </div>
            <div className="col-6">
                {fund ? (

                    <Card style={{ borderColor: "#5cb85c", width: "500px" }}>
                        <div className="row">
                            <div className="col-12">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                    Fund:- {userInfo.item1.phoneNumber}
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                    Main Account
                                </Card>
                            </div>
                            <div className="col-6">

                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                    BackShopping Account
                                </Card>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">

                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                    {fund.mainAccount}
                                </Card>

                            </div>
                            <div className="col-6">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                    {fund.backShoppingAccount}
                                </Card>
                            </div>
                        </div>
                    </Card>
                ) : (
                        <h1></h1>
                    )
                }
            </div>
            <div className="col-3">

            </div>
            </div>
        </div >
    );
};

export default FundAppSharerForAppSharerScreen;
