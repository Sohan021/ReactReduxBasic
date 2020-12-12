import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../../../components/common/BackComponent";
import { connect } from "react-redux";
import { detailsProductType } from "../../../actions/Regular/productTypeActions";
import ProductTypeDetails from "../../../components/screens/Regular/productType/ProductTypeDetailsScreen";

class ProductTypeDetailContainer extends Component {

    componentDidMount() {
        this.props.dispatch(detailsProductType(this.props.match.params.id));
    }

    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Detail ProductType</h1>
                <ProductTypeDetails />
            </Container>
        );
    }
}

export default connect()(ProductTypeDetailContainer);
