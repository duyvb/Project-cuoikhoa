import {useDispatch} from 'react-redux';
import {progressActions} from '../../store/progressSlice';

const useProgressBar = () => {
  const dispatch = useDispatch();

  const setProgressValue = (progressPercent) => {
    dispatch(progressActions.setProgress(progressPercent));
  };

  const resetProgressValue = () => {
    dispatch(progressActions.resetProgress());
  };

  const onProgress = (progressEvent) => {
    const completePercent =
      Math.round(progressEvent.loaded * 100) / progressEvent.total;
    setProgressValue(completePercent);
  };

  return {onProgress, resetProgressValue};
};

export default useProgressBar;
