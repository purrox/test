import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/styles.css';
import {AppProvider} from '@shopify/polaris';

import App from './App';

ReactDOM.render(
  <AppProvider
   apiKey="a3a15257123795c65ba63d51890995b1"
   
   shopOrigin="https://pebble-beach-concours-delegance.myshopify.com"
 >
   <App />
 </AppProvider>,
 document.getElementById('root'),
);


