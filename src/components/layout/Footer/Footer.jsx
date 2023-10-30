import {Box, Container, Divider, useMediaQuery, useTheme} from '@mui/material';
import {Stack} from '@mui/system';
import FooterCopyright from './FooterCopyright';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';
import FooterSocialLinks from './FooterSocialLinks';

const Footer = () => {
  const theme = useTheme();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      component='footer'
      marginTop={3}
      sx={{background: theme.palette.tertiary.main}}
      paddingY={3}
    >
      <Container fixed>
        <Stack direction='column' spacing={2} divider={<Divider />}>
          <Stack
            direction={isLargerThanMd ? 'row' : 'column'}
            spacing={2}
            divider={<Divider />}
            justifyContent='space-between'
          >
            <FooterLogo />
            <FooterLinks />
          </Stack>
          <Stack
            direction={isLargerThanMd ? 'row' : 'column'}
            alignItems='center'
            spacing={1.5}
            justifyContent='space-between'
          >
            <FooterCopyright />
            <FooterSocialLinks />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
