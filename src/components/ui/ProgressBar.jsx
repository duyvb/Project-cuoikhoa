import {LinearProgress, Portal} from '@mui/material';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import useProgressBar from '../../hooks/ui/useProgressBar';

const ProgressBar = () => {
  const progressBarState = useSelector((state) => state.progress);
  const {resetProgressValue} = useProgressBar();

  useEffect(() => {
    if (progressBarState.progress === 100) {
      setTimeout(() => {
        resetProgressValue();
      }, 1000);
    }
  }, [progressBarState.progress, resetProgressValue]);

  return (
    <Portal container={document.querySelector('body')}>
      <LinearProgress
        sx={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          width: '100vw',
          height: '6px',
          backgroundColor: 'transparent',
        }}
        variant='determinate'
        value={progressBarState.progress}
      ></LinearProgress>
    </Portal>
  );
};

export default ProgressBar;
