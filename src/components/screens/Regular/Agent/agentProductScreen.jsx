import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsByProductTypeCategory } from '../../../../actions/Regular/productActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button } from 'reactstrap';
import base from '../../../common/services/config';
function AgentProductsScreen(props) {

    const productType = props.match.params.ptype ? props.match.params.ptype : '';
    const category = props.match.params.categoryId ? props.match.params.categoryId : '';

    const subCategory = props.match.params.id ? props.match.params.id : '';

    const productListByProductTypeCategory = useSelector((state) => state.productListByProductTypeCategory);
    const { products } = productListByProductTypeCategory;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsByProductTypeCategory(productType, category, subCategory));
        return () => {
            //
        };
    }, [productType, category, subCategory]);

    return (


        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                {products ? (
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-3">
                                <Card style={{ color: "#000", backgroundColor: "#fff" }} >
                                    <div className="row">
                                        <Card.Img variant="top" height="200px" src={base + product.imageUrl} />
                                    </div>
                                    <div className="row">
                                        <Card.Body>
                                            <p style={{ color: "#06E2FF" }}>_______________________________</p>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {product.name}</h4></ListGroupItem>
                                                <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}>Price: {product.price}Tk</ListGroupItem>
                                            </ListGroup>
                                        </Card.Body>
                                    </div>
                                    <div className="row">
                                        <Card.Body>
                                            <Link to={'/productdetails/' + product.id}>
                                                <Button
                                                    style={{ color: "#06E2FF" }}
                                                    outline color="primary" size="lg" block type="submit">
                                                    Details
                                                </Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                                <br />
                                <br />
                            </div>
                        ))}
                    </div>

                ) : (
                        <h1>You dont hv any paymnt yet</h1>
                    )}
            </div>
        </>
    );
}
export default AgentProductsScreen;
