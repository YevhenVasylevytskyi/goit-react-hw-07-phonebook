import React from 'react';
import shortid from 'shortid';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/phonebook/phonebook-actions';
// import PropTypes from 'prop-types';
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

// Filter.protoType = {
//   filter: PropTypes.string,
//   onChangeFilter: PropTypes.func,
// };

export default Filter;
