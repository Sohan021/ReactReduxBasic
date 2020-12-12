import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import { listPaymentTypes, savePaymentType } from '../../../../actions/Fund/paymentTypeActions';

function PaymentTypeCreateScreen(props) {

    const [paymentTypeName, setName] = useState('');
    const [paymentTypeDescription, setDescription] = useState('');

    const paymentTypeSave = useSelector((state) => state.paymentTypeSave);

    const {
        success: successSave,
    } = paymentTypeSave;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPaymentTypes());

        return () => {

            //
        };
    }, [successSave]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            savePaymentType({
                paymentTypeName,
                paymentTypeDescription
            })
        );
    };

    return (
        <div className="container">
            {paymentTypeSave && (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="paymentTypeName">Name</Label>
                                <Input type="text"
                                    name="paymentTypeName"
                                    id="paymentTypeName"
                                    placeholder="Enter PaymentType Name"
                                    size="lg"
                                    value={paymentTypeName}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="paymentTypeDescription">Division Code</Label>
                                <Input type="text"
                                    name="paymentTypeDescription"
                                    id="paymentTypeDescription"
                                    placeholder="Enter PaymentType Description"
                                    size="lg"
                                    value={paymentTypeDescription}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormGroup>

                        </div>
                    </div>
                   
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            )
            }
        </div>
    );
}
export default PaymentTypeCreateScreen;
