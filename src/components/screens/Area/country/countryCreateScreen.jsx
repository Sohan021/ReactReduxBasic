import React, { Component } from 'react';
import {
    saveCountry,
} from '../../../../actions/Area/countryActions';
import { Container } from "reactstrap";
import FormComponent from "./countryFormComponent";
import { connect } from "react-redux";
import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
        country: state.countrySave.country,

    };
};

class CountryCreateScreen extends Component {

    handleSubmit(data) {
        this.props.dispatch(saveCountry(data));
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
                <h1>Create Country</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(CountryCreateScreen);
