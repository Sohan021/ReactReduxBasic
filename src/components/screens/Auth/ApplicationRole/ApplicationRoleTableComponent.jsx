import React from "react";
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
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteRole } from "../../../../actions/Auth/applicationRoleActions";

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
                dispatch(deleteRole(id))
                swal("SuccessFully Deleted", {
                    icon: "success",
                });
            } else {
                swal("Can Not delete Role an Error occured");
            }
        });
}


const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];

const mapStateToProps = (state) => {

    return {
        applicationRoleList: state.applicationRoleList.roles,

    };

};

const TableComponent = (props) => {

    const columns = [
        {
            dataField: "name",
            text: "Name",
            sort: true,
        },
        {
            dataField: "description",
            text: "Description",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"applicationroledetail/" + row.id}>
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faInfo} /> Detail
                            </Button>
                        </Link>

                        <Link to={"applicationroleedit/" + row.id}>
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                            </Button>
                        </Link>

                        <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </Button>

                    </div>
                );
            },
        },
    ];

    return (

        <Container>
            {props.applicationRoleList ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={props.applicationRoleList}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search
                >
                    {(props) => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to="/applicationrolecreate">
                                        <Button color="dark" className="mr-2">
                                            <FontAwesomeIcon icon={faUserPlus} /> Create Applicationrole
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

export default connect(mapStateToProps, null)(TableComponent);
