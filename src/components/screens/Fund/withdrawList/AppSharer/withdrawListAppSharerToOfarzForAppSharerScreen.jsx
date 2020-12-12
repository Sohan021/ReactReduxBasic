import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { listWithdrawAppSharerToOfarz } from '../../../../../actions/Fund/withdrawActions';


const WithdrawListAppSharerToOfarzForAppSharerScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const withdrawListAppSharerToOfarz = useSelector((state) => state.withdrawListAppSharerToOfarz)
    const { withdraws } = withdrawListAppSharerToOfarz;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listWithdrawAppSharerToOfarz(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);





    return (

        <div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}>
            <br />
            <br />
            <br />
            <br />
            {withdraws ? (


                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        {withdraws.map((withdraw) => (
                            <Card>
                                <div>
                                    <Card key={withdraw.id} style={{
                                        color: "#fff",
                                        backgroundColor: "#fff",
                                        borderColor: "#5cb85c"
                                    }} >
                                        <Card.Body style={{ alignItems: "center", justifyContent: "center" }}>
                                            <div className="row">
                                                <div className="col-4">
                                                    <Card style={{ padding: "10px", borderColor: "#5cb85c", height: "100px", justifyContent: "center" }}>
                                                        <h5 style={{ color: "#5cb85c" }}>Agent PhoneNumber:-{withdraw.agentPhnNumber}</h5>
                                                    </Card>
                                                </div>
                                                <div className="col-4">
                                                    <Card style={{ padding: "10px", borderColor: "#5cb85c", height: "100px", justifyContent: "center" }}>
                                                        <h5 style={{ color: "#5cb85c" }}>CashOut Time:-{withdraw.paymentTime}</h5>
                                                    </Card>
                                                </div>
                                                <div className="col-4">
                                                    <Card style={{ padding: "10px", borderColor: "#5cb85c", height: "100px", justifyContent: "center" }}>
                                                        <h5 style={{ color: "#5cb85c" }}>Amount:-{withdraw.amount}</h5>
                                                    </Card>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                    <br />
                                </div>
                            </Card>
                        ))}
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            ) : (
                    <h1>You dont hv any paymnt yet</h1>
                )
            }
        </div >

    );
};

export default WithdrawListAppSharerToOfarzForAppSharerScreen;
