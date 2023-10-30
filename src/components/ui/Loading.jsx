import {Backdrop, CircularProgress, useTheme} from '@mui/material';

const Loading = (props) => {
  const theme = useTheme();

  return (
    <Backdrop
      open={true}
      sx={{
        backgroundColor: theme.palette.tertiary.main,
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <CircularProgress color='warning' />
    </Backdrop>
  );
};

export default Loading;
