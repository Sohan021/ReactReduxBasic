import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shoperRegister } from '../../../../actions/Auth/shoperActions';

function ShoperRegistrationScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Register = useSelector(state => state.shoperRegistration);
    const { loading, shoperInfo, error } = Register;

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (shoperInfo) {
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [shoperInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(shoperRegister(firstname, lastname, mobilenumber, password, confirmPassword));
    }

    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Create Account</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input type="firstname" name="firstname" id="firstname" onChange={(e) => setFirstName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="lastname">
                        Last Name
                    </label>
                    <input type="lastname" name="lastname" id="lastname" onChange={(e) => setLastName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="mobilenumber">
                        Mobilenumber
                    </label>
                    <input type="text" name="mobilenumber" id="mobilenumber" onChange={(e) => setMobilenumber(e.target.value)}>
                    </input>
                </li>

                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="confirmPassword">Re-Enter Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Register</button>
                </li>
            </ul>
        </form>
    </div>
}
export default ShoperRegistrationScreen;





