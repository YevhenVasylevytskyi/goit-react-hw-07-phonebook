import React from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts-1/contacts-actions';
import style from './Filter.module.css';

const filterInputId = shortid.generate();

const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const changeFilter = event =>
    dispatch(contactsActions.changeFilter(event.target.value));

  return (
    <label className={style.label}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        name="filter"
        onChange={changeFilter}
        value={filter}
        id={filterInputId}
      ></input>
    </label>
  );
};

export default Filter;
