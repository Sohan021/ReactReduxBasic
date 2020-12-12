import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../../../components/common/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../../../components/screens/Regular/category/CategoryFormComponent";
import { detailsCategory, updateCategory } from "../../../actions/Regular/categoryActions";
import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
        category: state.categoryUpdate.category,
        error: state.categoryUpdate.error,
    };
};

class CategoryEditContainer extends Component {

    componentDidMount() {
        this.props.dispatch(detailsCategory(this.props.match.params.id));
    }
    handleSubmit(data) {
     
        this.props.dispatch(updateCategory(data, this.props.match.params.id));
    }

    render() {
        if (this.props.category || this.props.error) {
            if (this.props.error) {
                swal("Failed!", this.props.error, "error");
            } else {
                swal(
                    "Category Updated!"
                );
            }
        }
       
        return (
            <Container>
                <BackComponent />
                <h1>Edit Category</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(CategoryEditContainer);
