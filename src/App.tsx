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
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://0566a8be03614b1eafe90c144afe4d7e@o1067989.ingest.sentry.io/6062114",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

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

export default Sentry.wrap(App);
