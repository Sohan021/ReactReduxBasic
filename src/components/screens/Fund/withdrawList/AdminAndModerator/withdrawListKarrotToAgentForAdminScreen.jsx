import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Card, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useSelector, useDispatch } from 'react-redux';
import { listWithdrawKarrotToAgent } from '../../../../../actions/Fund/withdrawActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];

const WithdrawListKarrotToAgentAdminAndModeratorScreen = (props) => {

    const [karrotPhoneNumber, setKarrotPhoneNumber] = useState('');

    const withdraw = useSelector((state) => state.withdrawListKarrotToAgent)
    const { withdraws } = withdraw;

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //
        };
    }, []);


    const submitHandler = () => {

        dispatch(listWithdrawKarrotToAgent(karrotPhoneNumber))
    }

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
            dataField: "paymentTime",
            text: "Payment Time",
            sort: true,
            style: { 'width': '120px' }
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
                    <Card style={{ width: "876px", height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", borderColor: "#5cb85c", background: "#000" }}>
                        Karrot To Agent Cash Out List
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
                                                    <Form onSubmit={submitHandler}>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <FormGroup>
                                                                    <Input
                                                                        type="text"
                                                                        name="countInStock"
                                                                        id="countInStock"
                                                                        placeholder="Enter CEO Phone Number"
                                                                        size="lg"
                                                                        value={karrotPhoneNumber}
                                                                        onChange={(e) => setKarrotPhoneNumber(e.target.value)}
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

export default WithdrawListKarrotToAgentAdminAndModeratorScreen;
