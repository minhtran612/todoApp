import React from 'react';

class CategoryItem extends React.Component {
  constructor(props){
      super(props);
      this.liOnClickHandler         = this.liOnClickHandler.bind(this);
      this.buttonOnClickHandler     = this.buttonOnClickHandler.bind(this);
  }
  liOnClickHandler(){
      this.props.history.push(`/category/${this.props.pid}/showItem`);    
  }
  buttonOnClickHandler = (e) => {
      this.props.history.push(`/category/${this.props.pid}/addItem`);
  }
  render() {
    return (
      <div className="product-item">
          <li onClick={this.liOnClickHandler}>
              <p>{this.props.category_name}</p>
          </li>
          <button className="pull-right" onClick={this.buttonOnClickHandler}>
            <span><i className="fa fa-plus" aria-hidden="true"></i></span>
          </button>
      </div>  
    );
  }
}

export default CategoryItem;


