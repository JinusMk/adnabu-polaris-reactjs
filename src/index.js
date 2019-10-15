
import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/styles.css';
import {AppProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import * as serviceWorker from './serviceWorker';
import App from './App';

function WrappedApp() {
  return (
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
