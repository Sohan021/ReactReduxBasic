import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap'
import { Button } from 'reactstrap';
import { listMyOrders } from '../../../../actions/Regular/orderActions'

const OrderListForAgentScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const myOrderList = useSelector((state) => state.myOrderList)
    const { orders } = myOrderList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listMyOrders(userInfo.item1.id))
        return () => {
            //
        };
    }, []);

    const handleOrderDetails = (id) => {
        props.history.push("/agentOrderDeatils/" + id);
    }
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            {orders ? (
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        {orders.map((order) => (
                            <div>
                                <Card key={order.id} style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c" }} >
                                    <Card.Body >
                                        <div className="row">
                                            <div className="col-6">
                                                <Card style={{ padding: "10px" }}>
                                                    <h5 style={{ color: "#5cb85c" }}>OrderNo:-{order.orderNo}</h5>
                                                </Card>
                                            </div>
                                            <div className="col-6">
                                                <Card style={{ padding: "10px" }}>
                                                    <h5 style={{ color: "#5cb85c" }}>Total Amount:-{order.totalAmount}</h5>
                                                </Card>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-6">
                                                <Card style={{ padding: "10px" }}>
                                                    <h5 style={{ color: "#5cb85c" }}>Order Time:-{order.orderDate}</h5>
                                                </Card>
                                            </div>
                                            <div className="col-6">
                                                <Card style={{ padding: "10px" }}>
                                                    <Button
                                                        style={{
                                                            color: "#fff",
                                                        }}
                                                        color="success" size="lg" block type="submit"
                                                        onClick={() => handleOrderDetails(order.id)}
                                                    >
                                                        Details
                                                </Button>
                                                </Card>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>

                                <br />
                                <br />
                            </div>


                        ))}
                    </div>
                    <div className="col-2">

                    </div>
                </div>

            ) : (
                    <h1></h1>
                )}
        </div>
    );
};

export default OrderListForAgentScreen;
