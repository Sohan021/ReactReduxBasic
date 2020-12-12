import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
    updateProduct,
    listProducts, detailsProduct
} from '../../../../actions/Regular/productActions';
import { listCategories } from '../../../../actions/Regular/categoryActions';
import { listProducttypes } from '../../../../actions/Regular/productTypeActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import base from '../../../common/services/config';

function ProductEditScreen(props) {

    const productId = props.match.params.id;
    //const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [productCode, setProductCode] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [categoryId, setCategory] = useState('');
    const [productTypeId, setProductType] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const [uploading, setUploading] = useState(false);


    const productSave = useSelector((state) => state.productUpdate);
    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = productSave;

    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = productDelete;

    const categoryList = useSelector((state) => state.categoryList);
    const { categories } = categoryList;

    const productTypeList = useSelector((state) => state.productTypeList);
    const { productTypes } = productTypeList;

    const dispatch = useDispatch();

    useEffect(() => {
        // if (successSave) {
        //     setModalVisible(false);
        // }
        dispatch(detailsProduct(productId));
        dispatch(listCategories());
        dispatch(listProducttypes());
        return () => {
            //
        };
    }, [successSave, productId]);

    // const openModal = (product) => {
    //     setModalVisible(true);
    //     setId(product.id);
    //     setName(product.name);
    //     setPrice(product.price);
    //     setProductCode(product.productCode);
    //     setDescription(product.description);
    //     setImageUrl(product.imageUrl);
    //     setCategory(product.category);
    //     setProductType(product.productType);
    //     setCountInStock(product.countInStock);
    // };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({
                name,
                price,
                productCode,
                imageUrl,
                categoryId,
                productTypeId,
                countInStock,
                description,
            }, productId)
        );
    };
    const saveCatHandler = (e) => {
        setCategory(e.target.value);
    }
    const savePTypeHandler = (e) => {
        setProductType(e.target.value);
    }
    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('imageUrl', file);
        setUploading(true);
        axios
            .post(base + '/api/products/savephoto', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setImageUrl(response.data);
                setUploading(false);
            })
            .catch((err) => {
                console.log(err);
                setUploading(false);
            });
    };
    return (
        <div className="content content-margined">
           
            {productId && categories && productTypes && (

                <div className="container">

                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Product Name"
                                        size="lg"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input type="text"
                                        name="price"
                                        id="price"
                                        placeholder="Enter Product Price"
                                        size="lg"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock">In Stock</Label>
                                    <Input
                                        type="text"
                                        name="countInStock"
                                        id="countInStock"
                                        placeholder="Enter Count in Stock"
                                        size="lg"
                                        value={countInStock}
                                        onChange={(e) => setCountInStock(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock">Product Code</Label>
                                    <Input
                                        type="text"
                                        name="productCode"
                                        id="productCode"
                                        placeholder="Enter Product Code"
                                        size="lg"
                                        value={productCode}
                                        onChange={(e) => setProductCode(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="exampleSelect">Product Type</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={savePTypeHandler}
                                    >
                                        <option>Select ProductType</option>
                                        {productTypes.map((productType) => (

                                            <option value={productType.id}>
                                                {productType.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="exampleSelect">Category</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={saveCatHandler}
                                    >
                                        <option>Select Category</option>
                                        {categories.map((category) => (
                                            <option value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="image">Image Name</Label>
                                    <Input type="text"
                                        name="image"
                                        id="image"
                                        placeholder="Image Name"
                                        size="lg"
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                    />
                                    <Input
                                        type="file"
                                        onChange={uploadFileHandler}
                                    />
                                </FormGroup>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="exampleText">Description</Label>
                                    <Input
                                        type="textarea"
                                        name="text"
                                        id="exampleText"
                                        placeholder="Enter Product Discription"
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

                </div>

            )
            }
        </div >
    );
}
export default ProductEditScreen;
