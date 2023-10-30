import {Stack, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const FooterLogo = () => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Stack
      sx={{cursor: 'pointer'}}
      onClick={handleLogoClick}
      alignItems='center'
      spacing={1}
    >
      <Stack direction='column' spacing={0.5} alignItems='center'>
        <img src='./images/logo.png' alt="logo" width={250}/>
      </Stack>
      <Typography variant='subtitle1' component='p'>
        <h4>Lập trình định hướng tương lai</h4>
      </Typography>
    </Stack>
  );
};

export default FooterLogo;
