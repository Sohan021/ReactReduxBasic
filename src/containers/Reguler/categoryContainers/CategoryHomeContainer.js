import React, { Component } from "react";
import TableComponent from "../../../components/screens/Regular/category/CategoryTableComponent";
import { connect } from "react-redux";
import { listCategories, deleteCategory } from '../../../actions/Regular/categoryActions'

class CategoryHomeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(listCategories());
        this.props.dispatch(deleteCategory());
    }

    render() {

        return (
            <div>
                <TableComponent />
            </div>
        );
    }
}

export default connect()(CategoryHomeContainer);
