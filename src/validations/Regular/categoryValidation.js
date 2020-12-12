const CategoryValidation = (values) => {
    const errors = {};

    if (!values.name || values.name === "") {
        errors.name = "Category name should not empty";
    }

    if (!values.description || values.description === "") {
        errors.description = "Category description should not empty";
    }

    return errors
};

export default CategoryValidation;
