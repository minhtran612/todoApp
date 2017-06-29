import React from 'react';
import CategoryList from './CategoryList';
import { connect } from 'react-redux';
import { fetchCategoryList } from '../action/categoryAction';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryList: []
        }

    }
    loadCategoryFromServer() {
        this.props.fetchCategoryList()
        .then((data) => this.setState({categoryList: data.data.category }));
    }
    componentDidMount(){
        this.loadCategoryFromServer();
    }
    render(){
        return (
            <section className="col-md-4 col-md-offset-4">
                {
                    this.state.categoryList 
                    ? 
                    <div> 
                        < CategoryList categoryList={this.state.categoryList} {...this.props}/>
                    </div>
                    : null 
                }
            </section>
        );
    }
}

export default connect(null, { fetchCategoryList })(HomePage);