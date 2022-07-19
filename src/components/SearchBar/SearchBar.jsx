import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styled';
import { getFilter, changeFilter } from 'redux/filterSlice';

const SearchBar = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilterHandler = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search contact…"
        inputProps={{ 'aria-label': 'search' }}
        name="filter"
        value={filter.value}
        onChange={onChangeFilterHandler}
        autoComplete="off"
      />
    </Search>
  );
};

export default SearchBar;
