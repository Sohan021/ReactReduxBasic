import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { fundAgent } from '../../../../../actions/Fund/fundActions';

const FundAgentForAgentscreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;


    const fundd = useSelector((state) => state.fundAgent)
    const { fund } = fundd;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundAgent(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);



    return (

        <div className="container" style={{ justifyContent: "center", alignItems: "center" }}>
            <br />
            <br />
            <br />
            <br />
            <div className="row">

                <div className="col-2">

                </div>
                <div className="col-8">
                    {fund ? (
                        <Card style={{ borderColor: "#5cb85c"}}>
                            <div className="row">
                                <div className="col-12">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                        Fund:- {userInfo.item1.phoneNumber}
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                        Shoper Transection
                                </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                        Direct Cash Transection
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                        Main Account
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                        Total Transection
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                        {fund.shoperTransection}
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                        {fund.sellViaDirectCash}
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                        {fund.mainAccount}
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#5cb85c", borderColor: "#5cb85c" }}>
                                        {fund.totalTransection}
                                    </Card>
                                </div>
                            </div>
                        </Card>
                    ) : (
                            <h1></h1>
                        )
                    }
                </div>
                <div className="col-2">

                </div>
            </div>
        </div >
    );
};

export default FundAgentForAgentscreen