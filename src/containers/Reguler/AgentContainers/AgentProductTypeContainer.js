import React, { Component } from "react";
import AgentProductTypeScreen from "../../../components/screens/Regular/Agent/agentProductTypeScreen";
import { connect } from "react-redux";
import { listProducttypes } from "../../../actions/Regular/productTypeActions";

class AgentProductTypeHomeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(listProducttypes());

    }

    render() {

        return (
            <div>
                <AgentProductTypeScreen />
            </div>
        );
    }
}

export default connect()(AgentProductTypeHomeContainer);
