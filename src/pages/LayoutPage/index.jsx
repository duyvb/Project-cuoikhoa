import {Stack} from '@mui/material';
import {Outlet} from 'react-router-dom';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';

const LayoutPage = () => {
  return (
    <Stack justifyContent='space-between' sx={{minHeight: '100vh'}}>
      <Header />
      <Outlet />
      <Footer />
    </Stack>
  );
};

export default LayoutPage;
