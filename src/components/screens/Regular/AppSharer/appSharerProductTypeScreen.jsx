import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducttypes } from '../../../../actions/Regular/productTypeActions';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function AppSarerProductTypeScreen(props) {

    const agentCode = props.match.params.agentCode;
    debugger

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
                                <div className="col-3">

                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        {productTypes.map((ptype) => (
                                            <div className="col-6">
                                                <Card key={ptype.id} style={{ color: "#fff", backgroundColor: "#0C373A" }} >
                                                    <Card.Body>
                                                        <p style={{ color: "#06E2FF" }}>___________________________</p>
                                                        <Card.Title style={{
                                                            textAlign: 'center'
                                                        }}>
                                                            <Link to={`/customercategories/${agentCode}` + `,` + ptype.id}>
                                                                {ptype.name}
                                                            </Link>
                                                        </Card.Title>
                                                    </Card.Body>
                                                </Card>
                                                <br />
                                                <br />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-3">

                                </div>
                            </div>

                        </div>

                    )}
        </>
    );
}
export default AppSarerProductTypeScreen;
