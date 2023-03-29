import { ToastTypes } from 'types/toast';

import { ToastErrorIcon, ToastSuccessIcon } from './styles';

export const getToastIconVariant = (type: ToastTypes) => {
  if (type) {
    switch (type) {
      case 'success': {
        return <ToastSuccessIcon />;
      }

      case 'error': {
        return <ToastErrorIcon />;
      }

      default: {
        return <></>;
      }
    }
  }
};
