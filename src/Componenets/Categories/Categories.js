import React from 'react'
import "./Categories.css"
const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
const Categories = ({Categories , filteritems}) => {
  return (
    <div className='--flex-center'>
      {Categories.map((category,index) => {
        return(
          <button type='button' className='btn --btn --btn-secondary'
           key={index}
            onClick={() => filteritems(category)}>
            {/* {category} */}
            {capitalize(category)}
            </button>
        )
      })}
  
  </div>
  );
};

export default Categories
