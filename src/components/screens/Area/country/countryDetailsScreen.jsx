import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { detailsCountry } from "../../../../actions/Area/countryActions";

const CountryDetails = (props) => {

    const countryId = props.match.params.id;

    const countryDetails = useSelector((state) => state.countryDetails);

    const { country } = countryDetails;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsCountry(countryId));

        return () => {
            //
        };
    }, [countryId]);



    return (
        <div className="container">
            <div className="row">
                <div className="col col-lg-3">

                </div>
                <div className="col col-lg-6">
                    <h2>Countries</h2>
                    <Table striped>
                        <tbody>
                            <tr>
                                <td width="200">Name</td>
                                <td width="10">:</td>
                                <td>{country.name}</td>
                            </tr>
                            <tr>
                                <td width="200">Country Code</td>
                                <td width="10">:</td>
                                <td>{country.countryCode}</td>
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

export default CountryDetails;
