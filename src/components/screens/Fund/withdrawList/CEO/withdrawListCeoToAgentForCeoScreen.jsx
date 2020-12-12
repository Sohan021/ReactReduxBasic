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
import { listWithdrawCeoToAgent } from '../../../../../actions/Fund/withdrawActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const WithdrawListCeoToAgentForCeoScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const withdrawListCeoToAgent = useSelector((state) => state.withdrawListCeoToAgent)
    const { withdraws } = withdrawListCeoToAgent;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listWithdrawCeoToAgent(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);



    const columns = [
        {
            dataField: "userName",
            text: "Payer Name",
            sort: true,
        },
        {
            dataField: "userPhoneNumber",
            text: "Payer Phone Number",
            sort: true,
        },
        {
            dataField: "agentPhnNumber",
            text: "Agent Phone Number",
            sort: true,
        },
        {
            dataField: "amount",
            text: "Amount",
            sort: true,
        }
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

export default WithdrawListCeoToAgentForCeoScreen;
