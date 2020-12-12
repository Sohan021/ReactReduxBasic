import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Card, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import { listWithdraw } from '../../../../../actions/Fund/withdrawActions'

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const WithdrawListAdminAndModeratorScreen = (props) => {
    const withdrawList = useSelector((state) => state.withdrawList)
    const { withdraws } = withdrawList;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listWithdraw())
        return () => {
            //
        };
    }, []);



    const columns = [
        {
            dataField: "userPhoneNumber",
            text: "User Phone Number",
            sort: true,
        },
        {
            dataField: "agentPhnNumber",
            text: "Agent Phone Number",
            sort: true,
        },
        {
            dataField: "ofarzPhnNumber",
            text: "Ofarz Phone Number",
            sort: true,
        },
        {
            dataField: "paymentTime",
            text: "Payment Time",
            sort: true,
            style: { 'width': '120px' }
        },
        {
            dataField: "amount",
            text: "Amount",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"marketdetails/" + row.id}>
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faInfo} /> Detail
                            </Button>
                        </Link>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8">
                    <Card style={{ width: "876px", height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", borderColor: "#5cb85c", background: "#000" }}>
                        All Cash Out List
                    </Card>
                    <Card style={{ width: "876px", padding: "20px", borderColor: "#000" }}>
                        <Container>
                            {withdraws ? (
                                <ToolkitProvider
                                    bootstrap4
                                    keyField="id"
                                    data={withdraws}
                                    columns={columns}
                                    defaultSorted={defaultSorted}
                                    search
                                >
                                    {(props) => (
                                        <div>
                                            <Row>
                                                <Col>
                                                    <div className="float-right">
                                                        <SearchBar {...props.searchProps} placeholder="Search .." />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <BootstrapTable
                                                {...props.baseProps}
                                                pagination={paginationFactory()}
                                            />
                                        </div>
                                    )}
                                </ToolkitProvider>
                            ) : (
                                    <div className="text-center">
                                        {props.errorCategoriesList ? (
                                            <h4>{props.errorCategoriesList}</h4>
                                        ) : (
                                                <Spinner color="dark" />
                                            )}
                                    </div>
                                )}
                        </Container>
                    </Card>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    );
};

export default WithdrawListAdminAndModeratorScreen;
