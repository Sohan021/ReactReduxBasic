import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Card, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { useSelector, useDispatch } from 'react-redux';
import { fundAgent } from '../../../../../actions/Fund/fundActions';

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const FundAgentForAdminAndModeratorscreen = (props) => {

    const [agentPhoneNumber, setAgentPhoneNumber] = useState('');

    const fund = useSelector((state) => state.fundListAgent)
    const { funds } = fund;


    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fundAgent(agentPhoneNumber))
        return () => {
            //
        };
    }, []);

    const submitHandler = () => {

        dispatch(fundAgent(agentPhoneNumber))
    }

    const columns = [
        {
            dataField: "agentName",
            text: "AgentName",
            sort: true,
        },
        {
            dataField: "agentPhoneNumber",
            text: "AgentPhoneNumber",
            sort: true,
        },
        {
            dataField: "shoperTransection",
            text: "ShoperTransection",
            sort: true,
        },
        {
            dataField: "sellViaDirectCash",
            text: "SellViaDirectCash",
            sort: true,
        },
        {
            dataField: "totalTransection",
            text: "TotalTransection",
            sort: true,
        },
        {
            dataField: "mainAccount",
            text: "MainAccount",
            sort: true,
        }
    ]
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
                        Find Agent Fund
                    </Card>
                    <Card style={{ width: "876px", padding: "20px", borderColor: "#000" }}>
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
                                                    <Form onSubmit={submitHandler}>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <FormGroup>
                                                                    <Input
                                                                        type="text"
                                                                        name="countInStock"
                                                                        id="countInStock"
                                                                        placeholder="Enter Agent Phone Number"
                                                                        size="lg"
                                                                        value={agentPhoneNumber}
                                                                        onChange={(e) => setAgentPhoneNumber(e.target.value)}
                                                                    />
                                                                </FormGroup>
                                                            </div>
                                                            <div className="col-6">
                                                                <Button style={{
                                                                    color: "#000"
                                                                }} outline color="dark" size="lg" block type="submit">
                                                                    Search
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Form>
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
        </div >
    );
};

export default FundAgentForAdminAndModeratorscreen