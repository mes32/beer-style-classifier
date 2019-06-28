import axios from 'axios';
import React, { Component } from 'react';

interface Category {
    id: string;
    name: string;
};

interface CategoryFormProps {
    search: (selected: string) => void;
};

interface CategoryFormState {
    selected: string;
    categoryList: Array<Category>;
};

class CategoryForm extends Component<CategoryFormProps, CategoryFormState> {
    state: CategoryFormState = {
        selected: '',
        categoryList: Array<Category>()
    };

    componentDidMount() {
        axios.get('/api/category').then(response => {
            this.setState({ ...this.state, categoryList: response.data });
        });
    }

    handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selected: event.target.value });
        this.props.search(event.target.value);
    }

    render() {
        return (
            <div>
                <h3>Category</h3>
                <select value={this.state.selected} onChange={this.handleSelect}>
                    <option value="">[ select a category ]</option>
                    {this.state.categoryList.map(category => {
                        return <option key={category.id} value={category.id}>{category.id} - {category.name}</option>
                    })}
                </select>
            </div>
        );
    }
}

export default CategoryForm;
