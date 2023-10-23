const FilterByMovie = ({ nameFilter, handleChange }) => {
  const handleInput = (ev) => {
    handleChange(ev.target.value);
  };

  return( 
  <>
    <label htmlFor="movie"className='titleMovie'>Movies
      <input className='inputTitle'
        type="text"
        name="movie"
        id="id"
        value={nameFilter}
        onChange={handleInput}
      />
    </label>
  </>
  )
};

export default FilterByMovie;
