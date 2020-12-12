import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateMarket,
    detailsMarket
} from '../../../../actions/Area/marketActions';
import {
    listUnions
} from '../../../../actions/Area/unionOrWardActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function MarketEditScreen(props) {

    const marketId = props.match.params.id;
    const [name, setName] = useState('');
    const [marketCode, setMarketCode] = useState('');
    const [unionOrWardId, setUnion] = useState('');

    const marketDetails = useSelector((state) => state.marketDetails);
    const { market } = marketDetails;

    const unionList = useSelector((state) => state.unionList);
    const { unions } = unionList;

    const {
        success: successUpdate
    } = market;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(detailsMarket(marketId));
        dispatch(listUnions());

        setName(market.name)
        setMarketCode(market.marketCode)
        setUnion(market.unionOrWardId)

        return () => {
            //
        };
    }, [marketId, successUpdate]);

    const submitHandler = (e) => {

        dispatch(
            updateMarket({
                name,
                marketCode,
                unionOrWardId
            }, marketId)
        );
    };
    const setUnionHandler = (e) => {
        setUnion(e.target.value);
    }
    return (
        <div className="container">
            {market && unions ? (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"
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
                                <Label for="marketCcode">Market Code</Label>
                                <Input type="text"
                                    name="marketCcode"
                                    id="marketCcode"
                                    size="lg"
                                    value={marketCode}
                                    onChange={(e) => setMarketCode(e.target.value)}
                                />
                            </FormGroup>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="union">Union</Label>
                                <Input
                                    type="select"
                                    name="union"
                                    id="union"
                                    size="lg"
                                    onChange={setUnionHandler}
                                >
                                    <option>Select Union</option>
                                    {unions.map((union) => (
                                        <option value={union.id}>
                                            {union.name}
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
export default MarketEditScreen;
