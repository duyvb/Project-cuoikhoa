import {Link, Stack, styled, useMediaQuery, useTheme} from '@mui/material';

const FooterLink = styled(Link)(({theme}) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  transition: 'color 300ms ease',
  cursor: 'pointer',
  '&:hover, &:focus': {
    color: theme.palette.primary.main,
  },
}));

const FooterLinks = () => {
  const theme = useTheme();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack
      direction={isLargerThanMd ? 'row' : 'column'}
      alignItems='center'
      spacing={isLargerThanMd ? 2 : 1.5}
    >
      <FooterLink>Về chúng tôi</FooterLink>
      <FooterLink>Liên hệ</FooterLink>
      <FooterLink>Chính sách bảo mật</FooterLink>
      <FooterLink>Tuyển dụng</FooterLink>
    </Stack>
  );
};

export default FooterLinks;
