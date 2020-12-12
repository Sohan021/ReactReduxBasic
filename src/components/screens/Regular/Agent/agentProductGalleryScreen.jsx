import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, listProductsAgentAndCustomer } from '../../../../actions/Regular/productActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';
import { deleteAgentProduct } from '../../../../actions/Regular/productActions'
import base from '../../../common/services/config';

function AgentProductGalleryScreen(props) {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const category = props.match.params.id ? props.match.params.id : '';

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const productLisForAgentAndCustomer = useSelector((state) => state.productLisForAgentAndCustomer);
    const { products } = productLisForAgentAndCustomer;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(listProductsAgentAndCustomer(userInfo.item1.agentCode));

        return () => {
            //
        };
    }, []);



    const handleProductDeleteFormAgentGallery = (id) => {

        dispatch(deleteAgentProduct(id));
        props.history.push("/agnetProductGalleryForCustomer");
    };


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
                                    <div className="row">
                                        <Button
                                            style={{
                                                color: "#fff",
                                            }}
                                            color="danger" size="lg" block type="submit"
                                            onClick={() => handleProductDeleteFormAgentGallery(product.id)}
                                        >
                                            Delete?
                                        </Button>
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
export default AgentProductGalleryScreen;
