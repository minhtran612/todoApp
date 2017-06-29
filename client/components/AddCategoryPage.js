import React from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from './common/TextFieldGroup';
import { addNewCategory } from '../action/categoryAction';


class AddCategoryPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            category_name: '',
            invalid: false,
            isLoading: false,
            errors: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({ errors : {}, isLoading: true, invalid: false});
        this.props.addNewCategory(this.state.category_name)           
        .then( () => { 
            this.props.history.push("/");
        }, (error) => {
            this.setState({ errors : error.response.data, isLoading: false, invalid: false});
        })
    }

    render(){
        const { errors } = this.state;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form onSubmit={ this.onSubmit } >
                    <h1>Add a new category </h1>
                    <TextFieldGroup
                        error={errors.username}
                        label="Category Name"
                        onChange={this.onChange}
                        checkUserExists={null}
                        value={this.state.category_name}
                        field="category_name"
                    />
                    <div className="form-group">
                        <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg pull-right">
                            Add
                        </button>
                    </div>
                    </form>
                </div> 
            </div>
                 
        );
    }
}
export default connect(null, { addNewCategory })(AddCategoryPage);