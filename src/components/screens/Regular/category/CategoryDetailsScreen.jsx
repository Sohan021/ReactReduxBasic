import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
    return {
        categoryDetails: state.categoryDetails.category,
        //errorCategoryDetail: state.Categorys.errorCategoryDetail,
    };
};

const CategoryDetails = (props) => {

    return (
        <Table striped>
            <tbody>
                <tr>
                    <td width="200">Name</td>
                    <td width="10">:</td>
                    <td>{props.categoryDetails.name}</td>
                </tr>
                <tr>
                    <td width="200">Description</td>
                    <td width="10">:</td>
                    <td>{props.categoryDetails.description}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default connect(mapStateToProps, null)(CategoryDetails);
