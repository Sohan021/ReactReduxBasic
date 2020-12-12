import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitPaymentMainAccountOffer } from '../../../../../../../actions/Fund/paymentActions';
import { fundAppSharers } from '../../../../../../../actions/Fund/fundActions';
import { Card } from 'react-bootstrap'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


function PaymentMainAccountOffer(props) {

    const [amount, setAmount] = useState('');
    const [agentPhnNumber, setAgentPhnNumber] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const fundAppSharer = useSelector((state) => state.fundAppSharer);
    const { fund } = fundAppSharer;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundAppSharers(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const payerId = userInfo.item1.id;
        dispatch(submitPaymentMainAccountOffer(amount, agentPhnNumber, payerId));
    }
    return (
        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <Card style={{ padding: "10px", borderColor: "#5cb85c" }}>
                            <div className="row">
                                <div className="col-2">

                                </div>
                                <div className="col-8">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                        Main Account -- Offer Product
                                    </Card>
                                    <br />
                                    <br />
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                        Main Account Balance: {fund.mainAccount}
                                    </Card>
                                    <br />
                                    <br />
                                    <Form
                                        onSubmit={submitHandler}
                                    >
                                        <div
                                            style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
                                        >
                                            <FormGroup >
                                                <Label
                                                    for="name"
                                                    style={{ color: "#5cb85c" }}
                                                >
                                                    Amount
                                                </Label>
                                                <Input
                                                    style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                    type="text"
                                                    name="name"
                                                    color="06E2FF"
                                                    placeholder="Enter Amount"
                                                    size="lg"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup >
                                                <Label
                                                    for="password"
                                                    style={{ color: "#5cb85c" }}
                                                >
                                                    Agent PhoneNumber
                                                </Label>
                                                <Input
                                                    style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                    type="text"
                                                    name="name"
                                                    color="06E2FF"
                                                    placeholder="Enter Agent Phone Number"
                                                    size="lg"
                                                    value={agentPhnNumber}
                                                    onChange={(e) => setAgentPhnNumber(e.target.value)}
                                                />
                                            </FormGroup>
                                        </div>
                                        {fund.mainAccount >= amount ? (
                                            <Button
                                                style={{
                                                    color: "#06E2FF",
                                                }}
                                                outline color="success" size="lg" block type="submit">
                                                Payment
                                            </Button>
                                        ) : (
                                                <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#d9534f" }}>
                                                    You Do Not Have Enough Money
                                                </Card>
                                            )}

                                    </Form>
                                </div>
                                <div className="col-2">

                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>)
}
export default PaymentMainAccountOffer;