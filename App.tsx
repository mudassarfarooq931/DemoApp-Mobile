import store from '@redux/store';
import Routes from '@routes/routes';
// import Routes from '@routes/routes';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <ToastProvider>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <MenuProvider>
            <Routes />
          </MenuProvider>
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
