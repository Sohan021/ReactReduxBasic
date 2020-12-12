import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../../../components/common/BackComponent";
import FormComponent from "../../../components/screens/Regular/category/CategoryFormComponent";
import { connect } from "react-redux";
import { saveCategory } from '../../../actions/Regular/categoryActions';
import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
        category: state.categorySave.category,
        error: state.categorySave.error,
    };
};

class CategoryCreateContainer extends Component {

    handleSubmit(data) {
        this.props.dispatch(saveCategory(data));
    }

    render() {
        if (this.props.category || this.props.error) {
            if (this.props.category) {
                swal(
                    "Category Created!"

                );

            } else {
                swal(
                    "Failed!",
                    this.props.error,
                    "error"
                );
            }
        }
        return (
            <Container>
                <BackComponent />
                <h1>Create Category</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(CategoryCreateContainer);
