import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { useForm, FormProvider } from 'react-hook-form';
import { Provider } from 'react-redux';
import { store, persistor } from 'app/store/store';
import Toast from 'react-native-toast-message';

import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes/stack-nav';
import { ThemeProvider } from './utils';
import CustomToast from './components/items/custom-toast';



const App = () => {
  const methods = useForm();

  const toastConfig: any = {
    success: (props: any) => <CustomToast type="success" message={props?.text1} />,
    error: (props: any) => <CustomToast type="error" message={props.text1} />,
    info: (props: any) => <CustomToast type="info" message={props?.text1} />,
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppearanceProvider>
          <FormProvider {...methods}>
            <ThemeProvider>
              <Routes />
              <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
            </ThemeProvider>
          </FormProvider>
        </AppearanceProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
