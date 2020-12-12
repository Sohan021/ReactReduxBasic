import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    saveSubCategory,
    listSubCategories
} from '../../../../actions/Regular/subCategoryActions';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function SubCategoryCreateScreen(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const subCategorySave = useSelector((state) => state.subCategorySave);

    const subCategoryList = useSelector((state) => state.subCategoryList);
    const { subCategories } = subCategoryList;


    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = subCategorySave;

    const subCategoryDelete = useSelector((state) => state.subCategoryDelete);

    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = subCategoryDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listSubCategories());

        return () => {

            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveSubCategory({
                name,
                description
            })
        );
    };

    return (
        <div className="container">
            {subCategories ? (
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
                                <Label for="union">Union Code</Label>
                                <Input type="text"
                                    name="union"
                                    id="union"
                                    placeholder="Enter Union Code"
                                    size="lg"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
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
export default SubCategoryCreateScreen;
