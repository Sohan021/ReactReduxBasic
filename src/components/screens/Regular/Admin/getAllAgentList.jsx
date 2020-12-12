import React, { useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner, Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { agentsList } from '../../../../actions/Auth/agentActions'
import {
    faInfo,
    faEdit,
    faTrash,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const AgentListForAdmin = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const agentLists = useSelector((state) => state.agentList)
    const { agents } = agentLists;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(agentsList())
        return () => {
            //
        };
    }, []);



    const columns = [
        {
            dataField: "firstName",
            text: "Name",
            sort: true,
        },
        {
            dataField: "phoneNumber",
            text: "Phone Number",
            sort: true,
        },
        {
            dataField: "agentCode",
            text: "Agent Code",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div className="container">
                        <Link to={"agentprofiledetailsforadmin/" + row.id}>
                            <Button color="success" className="mr-2">
                                <FontAwesomeIcon icon={faInfo} /> Details
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
                    <Card style={{ width: "876px", padding: "20px", borderColor: "#000" }}>
                        <Container>
                            {agents ? (
                                <ToolkitProvider
                                    bootstrap4
                                    keyField="id"
                                    data={agents}
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

export default AgentListForAdmin;
