import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducttypes } from '../../../../../actions/Regular/productTypeActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function PaymentProductTypeScreen(props) {

    const productTypeList = useSelector((state) => state.productTypeList);
    const { productTypes, loading, error } = productTypeList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducttypes());

        return () => {
            //
        };
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                        <div className="container">
                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="row">
                                <div className="col-2">

                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-6">
                                            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c" }} >
                                                <Card.Body>
                                                        <Link to={'/paymentofferproduct'} style={{
                                                            textAlign: 'center', justifyContent: "center",
                                                        }}>
                                                        <Card style={{ height: "60px", backgroundColor: "#5cb85c", justifyContent: "center", color: "#fff" }}>Offer</Card>
                                                        </Link>
                                                 
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-6">
                                            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c" }} >
                                                <Card.Body>
                                                        <Link to={'/paymentpromotionalproduct/'} style={{
                                                            textAlign: 'center', justifyContent: "center",
                                                        }}>
                                                        <Card style={{ height: "60px", backgroundColor: "#5cb85c", justifyContent: "center", color: "#fff" }}>Promotional</Card>
                                                        </Link>                      
                                                </Card.Body>
                                            </Card>
                                        </div>



                                    </div>

                                </div>
                                <div className="col-2">

                                </div>

                            </div>
                        </div>
                    )}
        </>
    );
}
export default PaymentProductTypeScreen;
