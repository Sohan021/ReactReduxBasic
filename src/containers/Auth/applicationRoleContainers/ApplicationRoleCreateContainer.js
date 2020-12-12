import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../../../components/common/BackComponent";
import FormComponent from "../../../components/screens/Auth/ApplicationRole/ApplicationRoleFormComponent";
import { connect } from "react-redux";
import { saveRole } from '../../../actions/Auth/applicationRoleActions';
import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
        role: state.applicationRoleSave.role,
        error: state.categorySave.error,
    };
};

class RoleCreateContainer extends Component {

    handleSubmit(data) {
        this.props.dispatch(saveRole(data));
    }

    render() {
        if (this.props.category || this.props.error) {
            if (this.props.category) {
                swal(
                    "Role Created!"
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
                <h1>Create ApplicationRole</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(RoleCreateContainer);
