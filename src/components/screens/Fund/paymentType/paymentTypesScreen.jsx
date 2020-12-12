import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner, Card } from "reactstrap";
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
import { useSelector, useDispatch } from 'react-redux';
import { deletePaymentType, listPaymentTypes } from '../../../../actions/Fund/paymentTypeActions';

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
                dispatch(deletePaymentType(id))
                swal("SuccessFully Deleted", {
                    icon: "success",
                });
            } else {
                swal("Can Not delete Payment Type an Error occured");
            }
        });
}

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const PaymentTypeScreen = (props) => {

    const paymentTypeList = useSelector((state) => state.paymentTypeList);
    const { paymentTypes } = paymentTypeList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPaymentTypes());


        return () => {
            //
        };
    }, []);


    const columns = [
        {
            dataField: "paymentTypeName",
            text: "Name",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            style: { width: "20px" },
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"paymentTypedetails/" + row.id}>
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faInfo} /> Detail
                            </Button>
                        </Link>
                    </div>

                );
            },
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"paymenttypeupdate/" + row.id}>
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                            </Button>
                        </Link>
                    </div>
                );
            },
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Button color="dark" className="mr-2" onClick={() => handleClick(dispatch, row.id)}>
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </Button>
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
                    <Card style={{ width: "876px", padding:"20px", borderColor:"#000" }}>
                        <Container>
                            {paymentTypes ? (
                                <ToolkitProvider
                                    bootstrap4
                                    keyField="id"
                                    data={paymentTypes}
                                    columns={columns}
                                    defaultSorted={defaultSorted}
                                    search
                                >
                                    {(props) => (
                                        <div>
                                            <Row>
                                                <Col>
                                                    <Link to="/paymenttypecreate">
                                                        <Button color="dark" className="mr-2">
                                                            <FontAwesomeIcon icon={faUserPlus} /> Create PaymentType
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

                    </Card>
                </div>
                <div className="col-2">

                </div>
            </div>
        </div>
    );
};

export default PaymentTypeScreen;
