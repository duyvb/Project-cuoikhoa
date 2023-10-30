import {Stack} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const HeaderLogo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    
    <Stack
      sx={{cursor: 'pointer'}}
      direction='row'
      alignItems='center'
      spacing={1}
      onClick={handleLogoClick}
    >
      <img src='./images/logo.png' alt="logo" width={200}/>
    </Stack>
  );
};

export default HeaderLogo;
