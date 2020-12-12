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
import { fundOfarz, listFundOfarz } from '../../../../../actions/Fund/fundActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const FundOfarzForAdminScreen = (props) => {

    const [ofarzPhoneNumber, setOfarzPhoneNumber] = useState('');

    const fundListOfarz = useSelector((state) => state.fundListOfarz)
    const { funds } = fundListOfarz;

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //
        };
    }, []);


    const submitHandler = () => {

        dispatch(listFundOfarz())
    }

    const columns = [
        {
            dataField: "mainAccount",
            text: "MainAccount",
            sort: true,
        },
        {
            dataField: "getMoneyByAgent",
            text: "GetMoneyByAgent",
            sort: true,
        },
        {
            dataField: "getMoneyByKarrot",
            text: "GetMoneyByKarrot",
            sort: true,
        },
        {
            dataField: "getMoneyByCeo",
            text: "GetMoneyByCeo",
            sort: true,
        },
        {
            dataField: "getMoneyByAppSharer",
            text: "GetMoneyByAppSharer",
            sort: true,
        },
    ];

    return (

        <Container>
            {funds ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={funds}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search
                >
                    {(props) => (
                        <div>
                            <Row>
                                <Col>
                                    <div className="float-right">
                                        <Form onSubmit={submitHandler}>
                                            <div className="col col-lg-6">
                                                <FormGroup>
                                                    <Label for="name">Name</Label>
                                                    <Input type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="ofarzPhoneNumber"
                                                        size="lg"
                                                        value={ofarzPhoneNumber}
                                                        onChange={(e) => setOfarzPhoneNumber(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </div>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
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

export default FundOfarzForAdminScreen;
