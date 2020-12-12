import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { agentFind, agentsList } from '../../../../actions/Auth/agentActions'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function FindAgnetForAppSharer(props) {
    
    const [agentCode, setAgentCode] = useState('');
    
    const agentLists = useSelector((state) => state.agentFind)
    const { agent } = agentLists;



    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(agentFind(agentCode));
    };


    return (

        <div className="container">
            <br />
            <br />
            <Form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-3">
                        <FormGroup>
                            <Input
                                type="text"
                                name="countInStock"
                                id="countInStock"
                                placeholder="Enter Agnet Code"
                                size="lg"
                                value={agentCode}
                                onChange={(e) => setAgentCode(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-3">

                        <Button style={{
                            color: "#06E2FF"
                        }} outline color="primary" size="lg" block type="submit">
                            Search
                       </Button>
                    </div>

                </div>
            </Form>

            <br />
            <br />
            {agent ? (
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#0C373A" }} >
                            <Card.Body>
                                <p style={{ color: "#06E2FF" }}>_________________________________________</p>
                                <Card.Title>
                                    {agent.firstName}
                                </Card.Title>
                                <Card.Subtitle>
                                    {agent.phoneNumber}
                                </Card.Subtitle>
                            </Card.Body>
                            <Card.Body>
                                <Link to={'/customerProductTypes/' + agent.agentCode}>
                                    <Button style={{
                                        color: "#06E2FF"
                                    }} outline color="primary" size="lg" block type="submit">
                                        Enter Details
                                </Button>
                                </Link>
                            </Card.Body>
                        </Card>

                        <br />
                        <br />

                    </div>
                    <div className="col-4">

                    </div>


                </div>

            ) : (
                    <h1>You dont hv any paymnt yet</h1>
                )}
        </div>
    );
}
export default FindAgnetForAppSharer;
