import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, listProductsAgentAndCustomer } from '../../../../actions/Regular/productActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';
import { deleteAgentProduct } from '../../../../actions/Regular/productActions'
import base from '../../../common/services/config';

function AppSharerVireDirectAgentGalleryScreen(props) {

    const [agentCode, setAgentCode] = useState('');


    const productLisForAgentAndCustomer = useSelector((state) => state.productLisForAgentAndCustomer);
    const { products } = productLisForAgentAndCustomer;

    const dispatch = useDispatch();

    useEffect(() => {



        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listProductsAgentAndCustomer(agentCode));
    };


    return (
        <>
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

                ) : (
                        <h1>You dont hv any paymnt yet</h1>
                    )}
            </div>
        </>
    );
}
export default AppSharerVireDirectAgentGalleryScreen;
