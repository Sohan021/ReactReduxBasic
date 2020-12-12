import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listCategories } from '../../../../actions/Regular/categoryActions';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function AgentSecondScreen(props) {

    const ptype = props.match.params.id;
    const categoryList = useSelector((state) => state.categoryList);
    const { categories, loading, error } = categoryList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCategories());
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
                                        {categories.map((category) => (
                                            <div className="col-6">
                                                <Card key={category.id} style={{ color: "#fff", backgroundColor: "#0C373A" }} >
                                                    <Card.Body>
                                                        <p style={{ color: "#06E2FF" }}>___________________________</p>
                                                        <Card.Title style={{
                                                            textAlign: 'center'
                                                        }}>
                                                            <Link to={`/agentsubCategories/${ptype}` + `,` + category.id}>
                                                                {category.name}
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
export default AgentSecondScreen;
