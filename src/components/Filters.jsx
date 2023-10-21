import React from 'react';
import FilterByMovie from './FilterByMovie.jsx';
import FilterByYear from './FilterByYear.jsx';

const Filters = ({nameFilter,yearFilter, handleChange, handleChangeYear}) => {
const handleSubmit=(ev)=>{
  ev.preventDefault();
}


  return (
    <>
      <h2>Filtrar por...</h2>
      <form onSubmit={handleSubmit}>
      <FilterByMovie nameFilter={nameFilter} handleChange={handleChange}/>
      <FilterByYear yearFilter={yearFilter} handleChangeYear={handleChangeYear} />
      </form>
    </>
  )
}

export default Filters
