import {

    AGENT_REGISTER_FAIL,
    AGENT_REGISTER_REQUEST,
    AGENT_REGISTER_SUCCESS,

    AGENT_PROFILE_UPDATE_FAIL,
    AGENT_PROFILE_UPDATE_REQUEST,
    AGENT_PROFILE_UPDATE_SUCCESS,

    AGENT_LIST_REQUEST,
    AGENT_LIST_SUCCESS,
    AGENT_LIST_FAIL,
    FIND_AGENT_SUCCESS,
    FIND_AGENT_FAIL
} from "../../constants/Auth/agentConstants";


function agentListReducer(state = { agents: [] }, action) {
    switch (action.type) {
        case AGENT_LIST_REQUEST:
            return { loading: true };
        case AGENT_LIST_SUCCESS:
            return { loading: false, agents: action.payload };
        case AGENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function agentUpdateReducer(state = {}, action) {
    switch (action.type) {
        case AGENT_PROFILE_UPDATE_REQUEST:
            return { loading: true };
        case AGENT_PROFILE_UPDATE_SUCCESS:
            return { loading: false, agentInfo: action.payload };
        case AGENT_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function agentAddReducer(state = {}, action) {
    switch (action.type) {
        case AGENT_REGISTER_REQUEST:
            return { loading: true };
        case AGENT_REGISTER_SUCCESS:
            return { loading: false, agentInfo: action.payload };
        case AGENT_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function agentFindReducer(state = { agent: {} }, action) {

    switch (action.type) {
        case FIND_AGENT_SUCCESS:
            return { loading: false, agent: action.payload };
        case FIND_AGENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {
    agentListReducer,
    agentAddReducer,
    agentUpdateReducer,
    agentFindReducer
}
