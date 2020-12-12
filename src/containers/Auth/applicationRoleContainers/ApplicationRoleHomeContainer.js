import React, { Component } from "react";
import TableComponent from "../../../components/screens/Auth/ApplicationRole/ApplicationRoleTableComponent";
import { connect } from "react-redux";
import { listRoles, deleteRole } from '../../../actions/Auth/applicationRoleActions'

class ApplicationRoleHomeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(listRoles());
        this.props.dispatch(deleteRole());
    }

    render() {

        return (
            <div>
                <TableComponent />
            </div>
        );
    }
}

export default connect()(ApplicationRoleHomeContainer);
