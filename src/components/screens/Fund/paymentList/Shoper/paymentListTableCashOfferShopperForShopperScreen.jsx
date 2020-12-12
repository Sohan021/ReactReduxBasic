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
import {listPaymentsTableCashOfferShoper } from '../../../../../actions/Fund/paymentActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const PaymentListTableCashOfferFroShopperScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const paymentListTableCashOfferShoper = useSelector((state) => state.paymentListTableCashOfferShoper)
    const { payments } = paymentListTableCashOfferShoper;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPaymentsTableCashOfferShoper(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);



    const columns = [
        {
            dataField: "payer.firstName",
            text: "Payer Name",
            sort: true,
        },
        {
            dataField: "payerPhoneNumber",
            text: "Payer Phone Number",
            sort: true,
        },
        {
            dataField: "agentPhnNumber",
            text: "Agent Phone Number",
            sort: true,
        },
        {
            dataField: "productType.name",
            text: "Product Type",
            sort: true,
        },
        {
            dataField: "paymentType.paymentTypeName",
            text: "Payment Type",
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
            {payments ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={payments}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search
                >
                    {(props) => (
                        <div>
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

export default PaymentListTableCashOfferFroShopperScreen;
