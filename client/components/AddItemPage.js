import React from 'react';
import TextFieldGroup from './common/TextFieldGroup';
import { connect } from 'react-redux';
import { addNewItemToCategory } from '../action/categoryAction';

class AddItemPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item_name: '',
            item_description: '',
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
        const category_id = this.props.match.params.id;
        this.setState({ errors : {}, isLoading: true, invalid: false});
        this.props.addNewItemToCategory(category_id,this.state)           
        .then( () => { 
            this.props.history.push("/");
        }, (error) => {
            this.setState({ errors : error.response.data, isLoading: false, invalid: false});
        })
    }

    render(){
        return (
           <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form onSubmit={ this.onSubmit } >
                        <h1></h1>
                        <h2>Add a new item </h2>
                        <TextFieldGroup
                            error={null}
                            label="Todo Name"
                            onChange={this.onChange}
                            checkUserExists={null}
                            value={this.state.item_name}
                            field="item_name"
                        />
                         <TextFieldGroup
                            error={null}
                            label="Todo Description"
                            onChange={this.onChange}
                            checkUserExists={null}
                            value={this.state.item_description}
                            field="item_description"
                        />
                        <div className="form-group">
                            <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg pull-right">
                                Add New Item
                            </button>
                        </div>
                    </form>
                </div> 
            </div>
                 
        );
    }
}
export default connect(null, { addNewItemToCategory })(AddItemPage);