import React from 'react';
import './FilterCheckbox.css';
import PropTypes from 'prop-types';

function FilterCheckbox({ onCheckboxClick, checked }) {
  function onChangeClick() {
    onCheckboxClick(!checked);
  }

  return (
    <fieldset className="filter-checkbox">
      <label htmlFor="filter" className="filter-checkbox__title">
        <input
          className="filter-checkbox__input"
          id="filter"
          type="checkbox"
          onChange={onChangeClick}
          checked={checked}
        />
        Короткометражки
      </label>
    </fieldset>
  );
}

FilterCheckbox.propTypes = {
  onCheckboxClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default FilterCheckbox;
