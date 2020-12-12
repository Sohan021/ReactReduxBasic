const ProductTypeValidation = (values) => {
    const errors = {};

    if (!values.name || values.name === "") {
        errors.name = "ProductType name should not empty";
    }

    if (!values.description || values.description === "") {
        errors.description = "ProductType description should not empty";
    }

    return errors
};

export default ProductTypeValidation;
