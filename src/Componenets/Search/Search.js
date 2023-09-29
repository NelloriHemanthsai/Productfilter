import React from 'react'

const Search = ({inputvalue, oninputchange}) => {
  return (
    <div className='--form-control'>
      <input type='text' placeholder='Search Products' value={inputvalue} onChange={oninputchange}/>
    </div>
  )
}

export default Search
