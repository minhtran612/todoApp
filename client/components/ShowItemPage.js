import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { fetchItemOfCategory } from '../action/categoryAction';


class ShowItemPage extends React.Component{
    constructor(props){
        super(props);
         this.state = {
            itemList: []
        }
    }

    loadItemOfCategoryFromServer() {
        const category_id = this.props.match.params.id;
        this.props.fetchItemOfCategory(category_id)
        .then((data) => this.setState({itemList: data.data.item }));
    }
    componentDidMount(){
        this.loadItemOfCategoryFromServer();
    }

    render(){
        console.log(this.state.itemList);
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Todo Name</th>
                        <th>Todo Description</th>
                        <th>Created At</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.itemList.map((item, index) => {
                                    return(
                                        <Item item={item} key={index}/>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div> 
            </div>
                 
        );
    }
}
export default connect(null, { fetchItemOfCategory })(ShowItemPage);