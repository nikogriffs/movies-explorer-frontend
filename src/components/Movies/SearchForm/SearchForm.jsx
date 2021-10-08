import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SeachForm() {
  return (
    <section className="search">
      <form className="search__form">
        <fieldset className="search__fieldset">
          <input type="search" placeholder="Фильм" className="search__input" />
          <button type="submit" className="search__button button" aria-label="Search" disabled />
        </fieldset>
        <FilterCheckbox />
      </form>

    </section>

  );
}

export default SeachForm;
