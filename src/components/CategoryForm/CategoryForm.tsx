import React, { Component } from 'react';

interface CategoryFormProps {
    // searchBeerStyles: (state: CategoryFormState) => void;
};

// interface CategoryFormState {
//     selected?: number;
// };

class CategoryForm extends Component<CategoryFormProps> {
    // state: CategoryFormState = {
    //     selected: undefined
    // };

    render() {
        return (
            <div>
                <h3>Category</h3>
                <p>[ CategoryForm ]</p>
            </div>
        );
    }
}

export default CategoryForm;
