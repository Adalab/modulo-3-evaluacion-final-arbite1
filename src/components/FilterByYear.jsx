import React from 'react'

const FilterByYear = ({yearFilter,handleChangeYear}) => {

  const handleInput = (ev) => {
    handleChangeYear(parseInt( ev.target.value));
  };
  return (
    <>
    <label htmlFor="year">
      <input
        type="number"
        name="year"
        id="id"
        value={yearFilter}
        onChange={handleInput}
      />
    </label>
  </>
      
 
  )
}

export default FilterByYear
