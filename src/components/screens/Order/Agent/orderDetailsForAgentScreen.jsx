import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../../../actions/Regular/productActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { detailsOrder } from '../../../../actions/Regular/orderActions';

function OrderDetailsForAgent(props) {

    const orderId = props.match.params.id;

    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    //const category = props.match.params.id ? props.match.params.id : '';

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order } = orderDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsOrder(orderId));

        return () => {
            //
        };
    }, []);


    return (
        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                {order ? (
                    <Card>
                        <div className="row">
                            {order.map((product) => (
                                <div className="col-3">
                                    <Card style={{ color: "#000", backgroundColor: "#fff" }} >
                                        <div className="row">
                                            <Card.Img variant="top" height="200px" src={product.imageUrl} />
                                        </div>
                                        <div className="row">
                                            <Card.Body>
                                                <p style={{ color: "#06E2FF" }}>_________________________________</p>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {product.name}</h4></ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Price: {product.price}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Product Code: {product.productCode}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>ProductType: {product.productType.name}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Category: {product.category.name}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>SubCategory: {product.subCategory.name}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>CountInStock: {product.countInStock}</ListGroupItem>
                                                </ListGroup>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                    <br />
                                    <br />
                                </div>
                            ))}
                        </div>
                    </Card>

                ) : (
                        <h1>You dont hv any paymnt yet</h1>
                    )}
            </div>
        </>
    );
}
export default OrderDetailsForAgent;
