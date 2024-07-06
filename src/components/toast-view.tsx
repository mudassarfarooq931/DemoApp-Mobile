import {colors, fonts} from '@constants';
import {setToastMessage} from '@redux/slice/toast-slice';
import store, {RootState} from '@redux/store';
import React, {useEffect, useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import Toast from 'react-native-toast-notifications';
import {connect, useSelector} from 'react-redux';

//---------------------

const mapStateToProps = (state: RootState) => {
  return {
    message: state.toast.message,
  };
};

//---------------------
interface ToastViewProps {
  dark?: boolean;
  message?: string;
  offset?: number;
}

const ToastView = ({dark, message, offset}: ToastViewProps) => {
  const toastRef: any = useRef();

  const dispatch = store.store.dispatch;

  useEffect(() => {
    if (message) {
      toastRef.current.hideAll();
      toastRef.current.show(message);
      dispatch(setToastMessage(''));
    }
  }, [message]);

  return (
    <Toast
      ref={toastRef}
      textStyle={[dark ? styles.darkTextStyle : styles.textStyle]}
      style={[dark ? styles.darkContainer : styles.container]}
      duration={3000}
      placement={'top'}
      type={'normal'}
      animationType={'slide-in'}
      offset={offset ?? 30}
    />
  );
};

export default connect(mapStateToProps)(ToastView);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    zIndex: 99999999,
  },
  textStyle: {
    color: colors.primary,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: fonts.MONTSERRAT_BOLD,
  },
  darkContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryDark,
    zIndex: 99999999,
  },
  darkTextStyle: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: fonts.MONTSERRAT_REGULAR,
  },
});
