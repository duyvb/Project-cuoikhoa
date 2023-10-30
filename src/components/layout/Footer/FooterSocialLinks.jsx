import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Icon, Stack, styled} from '@mui/material';

const SocialMediaIcon = styled(Icon)(({theme}) => ({
  cursor: 'pointer',
  transition: 'color 300ms ease',
  '&:hover, &:focus': {
    color: theme.palette.primary.main,
  },
}));

const FooterSocialLinks = () => {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <SocialMediaIcon component={TwitterIcon} />
      <SocialMediaIcon component={YouTubeIcon} />
      <SocialMediaIcon component={InstagramIcon} />
      <SocialMediaIcon component={FacebookIcon} />
    </Stack>
  );
};

export default FooterSocialLinks;
