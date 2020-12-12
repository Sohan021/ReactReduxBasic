import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



import {
    listDivisions, saveDivision
} from '../../../../actions/Area/divisionActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { listCountries } from '../../../../actions/Area/countryActions';

function DivisionCreateScreen(props) {

    const [name, setName] = useState('');
    const [divisionCode, setDivisionCode] = useState('');
    const [countryId, setCountry] = useState('');



    const divisionSave = useSelector((state) => state.divisionSave);

    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = divisionSave;

    const divisionDelete = useSelector((state) => state.divisionDelete);

    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = divisionDelete;

    const countryList = useSelector((state) => state.countryList);
    const { countries } = countryList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listDivisions());
        dispatch(listCountries());
        return () => {

            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveDivision({
                name,
                divisionCode,
                countryId
            })
        );
    };
    const setCountryHandler = (e) => {
        setCountry(e.target.value);
    }
    return (
        <div className="container">
            {countries ? (
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
                                <Label for="divisionCode">Division Code</Label>
                                <Input type="text"
                                    name="divisionCode"
                                    id="divisionCode"
                                    placeholder="Enter division Code"
                                    size="lg"
                                    value={divisionCode}
                                    onChange={(e) => setDivisionCode(e.target.value)}
                                />
                            </FormGroup>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="country">Country</Label>
                                <Input
                                    type="select"
                                    name="country"
                                    id="country"
                                    size="lg"
                                    onChange={setCountryHandler}
                                >
                                    <option>Select Country</option>
                                    {countries.map((country) => (
                                        <option value={country.id}>
                                            {country.name}
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
export default DivisionCreateScreen;
