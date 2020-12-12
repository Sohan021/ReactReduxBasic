import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../../../components/common/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../../../components/screens/Auth/ApplicationRole/ApplicationRoleFormComponent";
import { detailsRole, updateRole } from "../../../actions/Auth/applicationRoleActions";
import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
        role: state.applicationRoleUpdate.role,
        error: state.categoryUpdate.error,
    };
};

class ApplicationRoleEditContainer extends Component {

    componentDidMount() {
        this.props.dispatch(detailsRole(this.props.match.params.id));
    }
    handleSubmit(data) {
        this.props.dispatch(updateRole(data, this.props.match.params.id));
    }

    render() {
        if (this.props.category || this.props.error) {
            if (this.props.error) {
                swal("Failed!", this.props.error, "error");
            } else {
                swal(
                    "Role Updated!"
                );
            }
        }
        return (
            <Container>
                <BackComponent />
                <h1>Edit ApplicationRole</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(ApplicationRoleEditContainer);
