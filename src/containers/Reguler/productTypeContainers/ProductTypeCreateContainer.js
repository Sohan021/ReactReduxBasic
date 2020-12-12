import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../../../components/common/BackComponent";
import ProductTypeFormComponent from "../../../components/screens/Regular/productType/ProductTypeFormComponent";
import { connect } from "react-redux";
import { saveProductType } from '../../../actions/Regular/productTypeActions';
import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
        productType: state.productTypeSave.productType,
        error: state.productTypeSave.error,
    };
};

class ProductTypeCreateContainer extends Component {

    handleSubmit(data) {
        this.props.dispatch(saveProductType(data));
    }

    render() {
        if (this.props.productType || this.props.error) {
            if (this.props.productType) {
                swal(
                    "ProductType Created!"

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
                <h1>Create ProductType</h1>
                <ProductTypeFormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(ProductTypeCreateContainer);
