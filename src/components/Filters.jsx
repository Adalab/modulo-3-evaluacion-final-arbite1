import React from 'react';
import FilterByMovie from './FilterByMovie.jsx';
import FilterByYear from './FilterByYear.jsx';

const Filters = ({nameFilter,yearFilter, handleChange, handleChangeYear,years}) => {
const handleSubmit=(ev)=>{
  ev.preventDefault();
}


  return (
    <>
      <h2 className='titleFilter'>Filtrar por...</h2>
      <form className='form' onSubmit={handleSubmit}>
      <FilterByMovie nameFilter={nameFilter} handleChange={handleChange}/>
      <FilterByYear yearFilter={yearFilter} handleChangeYear={handleChangeYear} year={years} />
      </form>
    </>
  )
}

export default Filters
