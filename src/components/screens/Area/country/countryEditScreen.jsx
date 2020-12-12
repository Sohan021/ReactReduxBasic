import React, { Component } from 'react';
import {
    detailsCountry,
    updateCountry,
} from '../../../../actions/Area/countryActions';
import { Container } from "reactstrap";
import FormComponent from "./countryFormComponent";
import { connect } from "react-redux";
import swal from "sweetalert";


const mapStateToProps = (state) => {
    return {
        country: state.countryUpdate.country,
    };
};

class CountryEditScreen extends Component {

    componentDidMount() {
        this.props.dispatch(detailsCountry(this.props.match.params.id));
    }
    handleSubmit(data) {

        this.props.dispatch(updateCountry(data, this.props.match.params.id));
    }

    render() {
        if (this.props.country || this.props.error) {
            if (this.props.error) {
                swal("Failed!", this.props.error, "error");
            } else {
                swal(
                    "Country Updated!"
                );
            }
        }

        return (
            <Container>
                <h1>Edit country</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(CountryEditScreen);
