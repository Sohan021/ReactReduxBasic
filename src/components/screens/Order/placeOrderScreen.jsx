import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fundAgent } from '../../../actions/Fund/fundActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button, Input } from 'reactstrap';
import { createOrder } from '../../../actions/Regular/orderActions';

function PlaceOrderScreen(props) {


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const funds = useSelector((state) => state.fundAgent)
    const { fund } = funds;


    const cart = useSelector(state => state.cart);
    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const { cartItems, shipping, payment } = cart;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);


    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        dispatch(createOrder(userInfo.item1.id, itemsPrice, cartItems));
    }

    const productDetailsHandler = (id) => {
        props.history.push('/productdetails/' + id);
    }

    useEffect(() => {
        dispatch(fundAgent(userInfo.item1.phoneNumber))
        if (success) {
            props.history.push("/");
        }

    }, [success]);

    return (<div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}
    >
        { cartItems && fund ? (
            <Card style={{ color: "#000", backgroundColor: "#fff", borderColor: "#5cb85c" }} >
                <div className="row">
                    <div className="col-8">
                        {cartItems.map((item) => (
                            <div className="row">
                                <div className="col-4">
                                    <Card.Body>
                                        <Card.Img variant="top" height="110px" width="110px" src={item.imageUrl} />
                                    </Card.Body>

                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        <Card.Body>
                                            <Card style={{ height: "40px", justifyContent: "center", borderColor: "#5cb85c" }}>{item.name}</Card>
                                        </Card.Body>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Card.Body>
                                                <Card style={{ height: "40px", justifyContent: "center", borderColor: "#5cb85c" }}>Qty: {item.qty}</Card>
                                            </Card.Body>
                                        </div>
                                        <div className="col-6">
                                            <Card.Body>
                                                <Card style={{ height: "40px", justifyContent: "center", borderColor: "#5cb85c" }}>{item.price * item.qty}</Card>
                                            </Card.Body>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                    <div className="col-4">
                        <p style={{ color: "#06E2FF" }}>____________________</p>
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                    <h3 style={{ color: "#25D03D" }}>Order Summary</h3>
                                    <p style={{ color: "#25D03D" }}>________________________</p>
                                </ListGroupItem>

                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                    <h4>SubTotal: {cartItems.reduce((a, c) => a + c.qty * 1, 0)} items</h4>
                                </ListGroupItem>
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                    <h4>TotalPrice: {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}Taka</h4>
                                </ListGroupItem>
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                    <h4>Main Account Will Have: {fund.mainAccount - cartItems.reduce((a, c) => a + c.price * c.qty, 0)} Taka</h4>
                                </ListGroupItem>
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                    <h4>Shipping Address: </h4>
                                    <h5>Shop Name: {userInfo.item1.agentShopName}</h5>
                                    <h5>Market: {userInfo.item1.marketName}</h5>
                                    <h5>Union / Ward: {userInfo.item1.unionName}</h5>
                                    <h5>Upozila: {userInfo.item1.upozilaName}</h5>
                                    <h5>District: {userInfo.item1.districtName}</h5>
                                </ListGroupItem>

                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                    <Button
                                        style={{ color: "#fff", }}
                                        color="success" size="lg" block type="submit"
                                        onClick={placeOrderHandler}
                                    >
                                        Confirm Order
                                                </Button>
                                </ListGroupItem>


                            </ListGroup>

                        </Card.Body>
                    </div>
                </div>

            </Card>

        ) : (
                <h1></h1>
            )}
    </div >)
}

export default PlaceOrderScreen;