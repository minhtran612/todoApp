import React from 'react';
import CategoryItem from './CategoryItem';

class CategoryList extends React.Component {
  render() {
    return (
      <ul className="product-list">
        {
          this.props.categoryList.map( (item, idx) => {
            return <CategoryItem key={idx} pid={item.id} {...item} {...this.props}/>
          })
        }
      </ul>
    );
  }
}

export default CategoryList;
