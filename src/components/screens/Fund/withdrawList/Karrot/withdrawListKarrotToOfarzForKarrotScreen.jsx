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

import { useSelector, useDispatch } from 'react-redux';
import { listPaymentsAppSharer } from '../../../../../actions/Fund/paymentActions';
import { listWithdrawKarrotToOfarz } from '../../../../../actions/Fund/withdrawActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const WithdrawListKarrotToOfarzForKarrotScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;


    const KarrotToOfarz = useSelector((state) => state.withdrawListKarrotToOfarz)
    const { withdraws } = KarrotToOfarz;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listWithdrawKarrotToOfarz(userInfo.item1.phoneNumber))
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
            dataField: "ofarzPhoneNumber",
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
    );
};


export default WithdrawListKarrotToOfarzForKarrotScreen;
