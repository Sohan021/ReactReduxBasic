import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    updateUpozila,
    detailsUpozila
} from '../../../../actions/Area/upozilaActions';

import {
    listDistricts
} from '../../../../actions/Area/districtActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function UpozilaEditScreen(props) {

    const upozilaDetails = useSelector((state) => state.upozilaDetails);

    const { upozila } = upozilaDetails;

    const upozilaId = props.match.params.id;
    const [name, setName] = useState('');
    const [upozilaCode, setUpozilaCode] = useState('');
    const [districtId, setDistrict] = useState('');





    const districtList = useSelector((state) => state.districtList);
    const { districts } = districtList;

    const {
        success: successUpdate
    } = upozila;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsUpozila(upozilaId));
        dispatch(listDistricts());
        return () => {

            //
        };
    }, [successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateUpozila({
                name,
                upozilaCode,
                districtId
            }, upozilaId)
        );
    };
    const setDistrictHandler = (e) => {
        setDistrict(e.target.value);
    }
    return (
        <div className="container">
            {districts ? (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"
                                    size="lg"
                                    defaultValue={upozila.name}
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
                                    placeholder={upozila.upozilaCode}
                                    size="lg"
                                    defaultValue={upozila.upozilaCode}
                                    onChange={(e) => setUpozilaCode(e.target.value)}
                                />
                            </FormGroup>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="division">Division</Label>
                                <Input
                                    type="select"
                                    name="division"
                                    id="division"
                                    size="lg"
                                    onChange={setDistrictHandler}
                                >
                                    <option>Select Division</option>
                                    {districts.map((division) => (
                                        <option value={division.id}>
                                            {division.name}
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
export default UpozilaEditScreen;
