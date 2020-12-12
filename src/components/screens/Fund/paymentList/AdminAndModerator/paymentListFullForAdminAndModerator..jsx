import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Card, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { listPayments } from '../../../../../actions/Fund/paymentActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const PaymentListFullForAdminScreen = (props) => {


    const paymentList = useSelector((state) => state.paymentList)
    const { payments } = paymentList;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(listPayments());
        return () => {
            //
        };
    }, []);


    const columns = [
        {
            dataField: "agentPhnNumber",
            text: "AgentPhoneNumber",
            sort: true,
        },
        {
            dataField: "payerPhoneNumber",
            text: "PayerPhoneNumber",
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
            dataField: "amount",
            text: "Amount",
            sort: true,
        }
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
                    <Card style={{ width: "876px", height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", borderColor: "#5cb85c", background:"#000" }}>
                        Full Payment List
                    </Card>
                    <Card style={{ width: "876px", padding: "20px", borderColor: "#000" }}>


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

export default PaymentListFullForAdminScreen;
