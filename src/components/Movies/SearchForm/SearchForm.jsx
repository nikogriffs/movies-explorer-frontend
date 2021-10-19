import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { useFormWithValidation } from '../../../utils/Validation';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm({ searchMovies, onCheckboxClick, checked }) {
  const { values, handleChange, resetForm } = useFormWithValidation();
  const [searchError, setSearchError] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    setSearchError('');
  }, [location]);

  function handleSubmit(e) {
    e.preventDefault();
    if (values.search) {
      searchMovies(values.search);
      setSearchError('');
      resetForm();
    } else {
      setSearchError('Нужно ввести ключевое слово');
    }
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <fieldset className="search__fieldset">
          <input
            onChange={handleChange}
            type="search"
            id="search"
            name="search"
            value={values.search || ''}
            placeholder="Фильм"
            className="search__input"
          />

          <button
            type="submit"
            className="search__button button"
            aria-label="Search"
          />
          <span className="search__error">{searchError}</span>
        </fieldset>

        <FilterCheckbox onCheckboxClick={onCheckboxClick} checked={checked} />
      </form>
    </section>
  );
}

SearchForm.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default SearchForm;
