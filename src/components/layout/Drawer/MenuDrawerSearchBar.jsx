import SearchIcon from '@mui/icons-material/Search';
import {Box, InputAdornment, TextField, useTheme} from '@mui/material';
import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';

const MenuDrawerSearchBar = (props) => {
  const theme = useTheme();
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search-courses?searchData=${searchInputRef.current.value}`);
    props.onClose();
    searchInputRef.current.value = '';
  };

  return (
    <Box component='form' onSubmit={handleSearchSubmit}>
      <TextField
        placeholder='Tìm kiếm khóa học'
        inputRef={searchInputRef}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Box
                component='button'
                type='submit'
                sx={{
                  display: 'grid',
                  padding: 0,
                  backgroundColor: 'transparent',
                  border: 'none',
                  placeContent: 'center',
                  cursor: 'pointer',
                  '&:hover > .MuiSvgIcon-root, &:focus > .MuiSvgIcon-root': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <SearchIcon sx={{transition: 'color 300ms ease'}} />
              </Box>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiInputBase-input': {
            height: '0.5em',
          },
        }}
      />
    </Box>
  );
};

export default MenuDrawerSearchBar;
