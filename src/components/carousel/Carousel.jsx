import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {Stack} from '@mui/system';
import CarouselIllustrator from './CarouselIllustrator';

const CarouselTitle = styled(Typography)(({theme}) => ({
  fontWeight: theme.typography.fontWeightBold,
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const Carousel = () => {
  const theme = useTheme();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box marginY={4}>
      <Container fixed>
        <Box
          paddingY={3}
          paddingX={2}
          sx={{
            borderRadius: '20px',
            backgroundColor: '#ceecfe',
          }}
        >
          <Grid container justifyContent='center' spacing={3}>
            <Grid order={isLargerThanMd && 2} item xs={12} md={6}>
              <Stack
                alignItems='center'
                justifyContent='center'
                sx={{
                  background: '#f3fbff',
                  borderRadius: '40px',
                }}
              >
                <CarouselIllustrator size={isLargerThanMd ? '1.5' : '1'} />
              </Stack>
            </Grid>
            <Grid order={isLargerThanMd && 1} item xs={12} md={6}>
              <Stack
                height='100%'
                direction='column'
                alignItems={isLargerThanMd ? 'start' : 'center'}
                justifyContent='center'
                paddingLeft={isLargerThanMd && 5}
                spacing={4}
              >
                <CarouselTitle
                  variant={isLargerThanMd ? 'h2' : 'h4'}
                  component='h2'
                  color={theme.palette.text.primary}
                >
                  Chọn đúng lộ trình cho bạn và Thăng tiến sự nghiệp cùng
                  CyberSoft !
                </CarouselTitle>
                <Button
                    sx={{
                      color: theme.palette.tertiary.main,
                      fontWeight: theme.typography.fontWeightBold,
                    }}
                    color='warning'
                    size='large'
                    variant='contained'
                  >
                    Hãy Đăng Ký Học Thử
                  </Button>
                
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Carousel;
