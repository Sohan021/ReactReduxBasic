import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    updateUnion,
    detailsUnion
} from '../../../../actions/Area/unionOrWardActions';

import {
    listUpozilas
} from '../../../../actions/Area/upozilaActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function UnionEditScreen(props) {

    const unionId = props.match.params.id;
    const [name, setName] = useState('');
    const [unionOrWardCode, setUnionCode] = useState('');
    const [upozilaId, setUpozila] = useState('');


    const unionDetails = useSelector((state) => state.unionDetails);

    const { union } = unionDetails;

    const upozilaList = useSelector((state) => state.upozilaList);
    const { upozilas } = upozilaList;

    const {
        success: successUpdate
    } = union;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsUnion(unionId));
        dispatch(listUpozilas());
        return () => {

            //
        };
    }, [successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateUnion({
                name,
                unionOrWardCode,
                upozilaId
            }, unionId)
        );
    };
    const setUpozilaHandler = (e) => {
        setUpozila(e.target.value);
    }
    return (
        <div className="container">
            {upozilas ? (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"
                                    placeholder={union.name}
                                    size="lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="district">District Code</Label>
                                <Input type="text"
                                    name="district"
                                    id="district"
                                    placeholder={union.unionCode}
                                    size="lg"
                                    value={unionOrWardCode}
                                    onChange={(e) => setUnionCode(e.target.value)}
                                />
                            </FormGroup>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="upozila">Upozila</Label>
                                <Input
                                    type="select"
                                    name="upozila"
                                    id="upozila"
                                    size="lg"
                                    onChange={setUpozilaHandler}
                                >
                                    <option>Select Division</option>
                                    {upozilas.map((upozila) => (
                                        <option value={upozila.id}>
                                            {upozila.name}
                                        </option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </div>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            ) :
                <h1>Error</h1>
            }
        </div>
    );
}
export default UnionEditScreen;
