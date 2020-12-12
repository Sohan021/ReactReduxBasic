

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    saveDistrict,
    listDistricts
} from '../../../../actions/Area/districtActions';

import {
    listDivisions
} from '../../../../actions/Area/divisionActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function DistrictCreateScreen(props) {

    const [name, setName] = useState('');
    const [districtCode, setDistrictCode] = useState('');
    const [divisionId, setDivision] = useState('');



    const districtSave = useSelector((state) => state.districtSave);

    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = districtSave;

    const districtDelete = useSelector((state) => state.districtDelete);

    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = districtDelete;

    const divisionList = useSelector((state) => state.divisionList);
    const { divisions } = divisionList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listDistricts());
        dispatch(listDivisions());
        return () => {

            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveDistrict({
                name,
                districtCode,
                divisionId
            })
        );
    };
    const setDivisionHandler = (e) => {
        setDivision(e.target.value);
    }
    return (
        <div className="container">
            {divisions ? (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter division Name"
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
                                <Label for="districtCode">District Code</Label>
                                <Input type="text"
                                    name="districtCode"
                                    id="districtCode"
                                    placeholder="Enter division Code"
                                    size="lg"
                                    value={districtCode}
                                    onChange={(e) => setDistrictCode(e.target.value)}
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
                                    onChange={setDivisionHandler}
                                >
                                    <option>Select division</option>
                                    {divisions.map((division) => (
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
export default DistrictCreateScreen;
