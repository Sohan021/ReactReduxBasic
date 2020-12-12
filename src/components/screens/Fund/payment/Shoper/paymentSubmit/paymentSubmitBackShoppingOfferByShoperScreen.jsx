import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'reactstrap';
import { fundShoper } from '../../../../../../actions/Fund/fundActions';
import { submitPaymentShoperBackShoppingOffer } from '../../../../../../actions/Fund/paymentActions';


function PaymentBackShoppingOfferByShoper(props) {

    const [amount, setAmount] = useState('');
    const [agentPhnNumber, setAgentPhnNumber] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;


    const fundListShoper = useSelector((state) => state.fundListShoper)
    const { funds } = fundListShoper;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundShoper(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const payerId = userInfo.item1.id;
        dispatch(submitPaymentShoperBackShoppingOffer(amount, agentPhnNumber, payerId));

    }

    const columns = [
        {
            dataField: "backShoppingAccount",
            text: "BackShoppingAccount",
            sort: true,
            headerAlign: 'center',
            style: { backgroundColor: 'white' },
            alignItems: 'center'

        },
    ]

    return <div className="row">
        <div className="col-3">

        </div>
        <div className="col-5">
            {funds ? (
                <ToolkitProvider
                    keyField="id"
                    data={funds}
                    columns={columns}

                >
                    {(props) => (
                        <div>
                            <BootstrapTable
                                {...props.baseProps}
                            />
                        </div>
                    )}
                </ToolkitProvider>
            ) : (
                    <div className="text-center">
                        {props.errorCategoriesList ? (
                            <h4>{props.errorCategoriesList}</h4>
                        ) : (
                                <Spinner color="dark" />
                            )}
                    </div>
                )}


            {userInfo ?
                (
                    <form onSubmit={submitHandler} >
                        <ul className="form-container">
                            <li>
                                <p>BackShopping Offer</p>
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
                    </form>) : (
                    <h1></h1>
                )}
        </div>
        <div className="col-3">

        </div>
    </div>
}
export default PaymentBackShoppingOfferByShoper;