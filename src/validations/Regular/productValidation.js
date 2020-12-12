const ProductValidation = (values) => {
    const errors = {};

    if (!values.name || values.name === "") {
        errors.name = "Product name should not empty";
    }

    if (!values.description || values.description === "") {
        errors.description = "Product description should not empty";
    }

    return errors
};

export default ProductValidation;
