import React from 'react'

const FilterByYear = ({yearFilter, handleChangeYear, years}) => {

  const handleInput = (ev) => {
    handleChangeYear(parseInt( ev.target.value));
  };

  const renderYear = () => {

    if (years) {
      return years.map((year, i) => (
        <option key={i} value={year}>
          {year}
        </option>
      ));
    } else {
      return null;
    }
  };

  return (
    <>
      <label htmlFor="year" className='titleYears'>Years
        <input
          type="number"
          name="year"
          id="id"
          value={yearFilter}
          onChange={handleInput}
        />
      </label>
      <section>
        <ul>{renderYear()}</ul>
      </section>
    </>
  );
};

export default FilterByYear;



