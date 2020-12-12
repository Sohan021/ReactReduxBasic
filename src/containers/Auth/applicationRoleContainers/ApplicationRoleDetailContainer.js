import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../../../components/common/BackComponent";
import { connect } from "react-redux";
import { detailsRole } from "../../../actions/Auth/applicationRoleActions";
import ApplicationRoleDetail from "../../../components/screens/Auth/ApplicationRole/ApplicationRoleDetailsScreen";

class ApplicationRoleDetailContainer extends Component {

    componentDidMount() {
        this.props.dispatch(detailsRole(this.props.match.params.id));
    }

    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Detail Category</h1>
                <ApplicationRoleDetail />
            </Container>
        );
    }
}

export default connect()(ApplicationRoleDetailContainer);
