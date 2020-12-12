import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitPaymentShoperTableCashOffer } from '../../../../../../actions/Fund/paymentActions';

function PaymentTableCashOfferByShoper(props) {

    const [amount, setAmount] = useState('');
    const [agentPhnNumber, setAgentPhnNumber] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const payerId = userInfo.item1.id;
        dispatch(submitPaymentShoperTableCashOffer(amount, agentPhnNumber, payerId));

    }
    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <p>Table Cash Offer</p>
                </li>
                <li>
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        onChange={(e) => setAmount(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="agentPhnNumber">
                        Agent Phone Number
                    </label>
                    <input
                        type="text"
                        id="agentPhnNumber"
                        name="agentPhnNumber"
                        onChange={(e) => setAgentPhnNumber(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Submit Payment</button>
                </li>
            </ul>
        </form>
    </div>
}
export default PaymentTableCashOfferByShoper;