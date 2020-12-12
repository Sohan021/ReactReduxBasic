import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo,
    faEdit,
    faTrash,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { deleteDivision, listDivisions } from "../../../../actions/Area/divisionActions";
import { listCountries } from "../../../../actions/Area/countryActions";
import { useSelector, useDispatch } from 'react-redux';

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {

    swal({
        title: "Do you want to delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteDivision(id))
                swal("SuccessFully Deleted", {
                    icon: "success",
                });
            } else {
                swal("Can Not deted category an Error occured");
            }
        });
}

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const DivisionScreen = (props) => {

    const divisionList = useSelector((state) => state.divisionList);
    const { divisions } = divisionList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listDivisions());
        dispatch(listCountries());

        return () => {
            //
        };
    }, []);


    const columns = [
        {
            dataField: "name",
            text: "Name",
            sort: true,
        },
        {
            dataField: "divisionCode",
            text: "Division Code",
            sort: true,
        },
        {
            dataField: "country.name",
            text: "Country",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"divisiondetails/" + row.id}>
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faInfo} /> Detail
                            </Button>
                        </Link>
                        <Link to={"divisionupdate/" + row.id}>
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                            </Button>
                        </Link>
                        <Button color="dark" className="mr-2" onClick={() => handleClick(dispatch, row.id)}>
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (

        <Container>
            {divisions ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={divisions}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search
                >
                    {(props) => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to="/divisioncreate">
                                        <Button color="dark" className="mr-2">
                                            <FontAwesomeIcon icon={faUserPlus} /> Create Division
                                        </Button>
                                    </Link>
                                </Col>
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

export default DivisionScreen;
