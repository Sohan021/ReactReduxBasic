import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { detailsPaymentType } from "../../../../actions/Fund/paymentTypeActions";

const PaymentTypeDetails = (props) => {

    const paymentTypeId = props.match.params.id;

    const paymentTypeDetails = useSelector((state) => state.paymentTypeDetails);
    const { paymentType } = paymentTypeDetails;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(detailsPaymentType(paymentTypeId));

        return () => {
            //
        };
    }, [paymentTypeId]);

    console.log(paymentType);

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col col-lg-3">
                </div>
                <div className="col col-lg-6">
                    <h2>PaymentType</h2>
                    <Table striped>
                        <tbody>
                            <tr>
                                <td width="200">Name</td>
                                <td width="10">:</td>
                                <td>{paymentType.paymentTypeName}</td>
                            </tr>
                            <tr>
                                <td width="200">Description</td>
                                <td width="10">:</td>
                                <td>{paymentType.paymentTypeDescription}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="col col-lg-3">
                </div>
            </div>
        </div>
    );
};

export default PaymentTypeDetails;
