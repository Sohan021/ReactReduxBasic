import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listSubCategories } from '../../../../actions/Regular/subCategoryActions';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AgentThirdScreen(props) {

    const categoryId = props.match.params.id;
    const productTypeId = props.match.params.ptype ? props.match.params.ptype : '';

    const subCategoryList = useSelector((state) => state.subCategoryList);
    const { subCategories, loading, error } = subCategoryList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listSubCategories());
       
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
                                        {subCategories.map((subCategory) => (
                                            <div className="col-6">
                                                <Card key={subCategory.id} style={{ color: "#fff", backgroundColor: "#0C373A" }} >
                                                    <Card.Body>
                                                        <p style={{ color: "#06E2FF" }}>___________________________</p>
                                                        <Card.Title style={{
                                                            textAlign: 'center'
                                                        }}>
                                                            <Link to={`/agentproductsscreen/${productTypeId}` + `,` + `${categoryId}` + `,` + subCategory.id}>
                                                                {subCategory.name}
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
export default AgentThirdScreen;
