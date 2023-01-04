import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(filterContacts(filterValue));
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
};
