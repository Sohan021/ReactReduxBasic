import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../../../components/common/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../../../components/screens/Regular/productType/ProductTypeFormComponent";
import { detailsProductType, updateProductType } from "../../../actions/Regular/productTypeActions";
import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
        productType: state.productTypeUpdate.productType,
        error: state.productTypeUpdate.error,
    };
};

class EditProductTypeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(detailsProductType(this.props.match.params.id));
    }
    handleSubmit(data) {
        this.props.dispatch(updateProductType(data, this.props.match.params.id));
    }

    render() {
        if (this.props.productType || this.props.error) {
            if (this.props.error) {
                swal("Failed!", this.props.error, "error");
            } else {
                swal(
                    "ProductType Updated!"
                );
            }
        }
        return (
            <Container>
                <BackComponent />
                <h1>Edit ProductType</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(EditProductTypeContainer);
