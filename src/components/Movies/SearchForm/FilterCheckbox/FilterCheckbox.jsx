import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isChecked, setIsChecked] = React.useState(true);
  function onChangeClick() {
    setIsChecked(!isChecked);
  }

  return (
    <fieldset className="filter-checkbox">
      <label htmlFor="filter" className="filter-checkbox__title">
        <input
          className="filter-checkbox__input"
          id="filter"
          type="checkbox"
          onChange={onChangeClick}
          checked={isChecked}
        />
        Короткометражки
      </label>
    </fieldset>

  );
}

export default FilterCheckbox;
