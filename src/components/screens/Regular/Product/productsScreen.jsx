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
import { deleteProduct, listProducts } from "../../../../actions/Regular/productActions";
import { listCategories } from "../../../../actions/Regular/categoryActions";
import { listProducttypes } from "../../../../actions/Regular/productTypeActions";
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
                dispatch(deleteProduct(id))
                swal("SuccessFully Deleted", {
                    icon: "success",
                });
            } else {
                swal("Can Not delete Product an Error occured");
            }
        });
}

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];

const ProductsScreen = (props) => {

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
        dispatch(listCategories());
        dispatch(listProducttypes());

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
            dataField: "price",
            text: "price",
            sort: true,
        },
        {
            dataField: "countInStock",
            text: "Quantity",
            sort: true,
        },
        {
            dataField: "productCode",
            text: "Product Code",
            sort: true,
        },
        {
            dataField: "createdAt",
            text: "Create Time",
            sort: true,
        },
        {
            dataField: "imageUrl",
            text: "Photo name",
            sort: true,
        },
        {
            dataField: "category.name",
            text: "Category",
            sort: true,
        },
        {
            dataField: "productType.name",
            text: "Product Type",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"productdetailsadmin/" + row.id}>
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faInfo} /> Detail
                            </Button>
                        </Link>
                        <Link to={"productedit/" + row.id}>
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
            {products ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={products}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search
                >
                    {(props) => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to="/productcreate">
                                        <Button color="dark" className="mr-2">
                                            <FontAwesomeIcon icon={faUserPlus} /> Create Product
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

export default ProductsScreen;
