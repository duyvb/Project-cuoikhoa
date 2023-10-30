import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Collapse,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from '@mui/material';
import {Stack} from '@mui/system';
import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const HeaderSearchInput = () => {
  const theme = useTheme();
  const searchInputRef = useRef(null);
  const [isSearchInputShow, setIsSearchInputShow] = useState(false);
  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    setIsSearchInputShow(true);
  };

  const handleCloseButtonClick = () => {
    setIsSearchInputShow(false);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search-courses?searchData=${searchInputRef.current.value}`);
    searchInputRef.current.value = '';
    setIsSearchInputShow(false);
  };

  useEffect(() => {
    if (isSearchInputShow) {
      searchInputRef.current.focus();
    }
  }, [isSearchInputShow]);

  return (
    <Stack
      component='form'
      onSubmit={handleSearchSubmit}
      direction='row'
      spacing='1'
    >
      <Collapse in={isSearchInputShow} orientation='horizontal' timeout={200}>
        <TextField
          required
          placeholder='Tìm kiếm khóa học'
          autoComplete='off'
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
            endAdornment: (
              <InputAdornment
                position='end'
                sx={{
                  '& .MuiSvgIcon-root': {
                    cursor: 'pointer',
                    transition: 'color 300ms ease',

                    '&:hover, &:focus': {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <CloseIcon onClick={handleCloseButtonClick} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiInputBase-input': {
              height: '0.5em',
            },
          }}
          inputRef={searchInputRef}
        />
      </Collapse>
      <Collapse
        orientation='horizontal'
        in={!isSearchInputShow}
        timeout={200}
        sx={{display: 'grid', placeContent: 'center'}}
      >
        <IconButton
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            fontSize: '1rem',
          }}
          onClick={handleSearchButtonClick}
          color='primary'
        >
          <SearchIcon fontSize='1rem' />
        </IconButton>
      </Collapse>
    </Stack>
  );
};

export default HeaderSearchInput;
