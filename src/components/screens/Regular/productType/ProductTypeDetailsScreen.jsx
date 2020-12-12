import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
    return {
        productTypeDetails: state.productTypeDetails.productType,
        //errorproductTypeDetail: state.productTypes.errorproductTypeDetail,
    };
};

const ProductTypeDetails = (props) => {
    debugger
    return (
        <Table striped>
            <tbody>
                <tr>
                    <td width="200">Name</td>
                    <td width="10">:</td>
                    <td>{props.productTypeDetails.name}</td>
                </tr>
                <tr>
                    <td width="200">Description</td>
                    <td width="10">:</td>
                    <td>{props.productTypeDetails.description}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default connect(mapStateToProps, null)(ProductTypeDetails);
