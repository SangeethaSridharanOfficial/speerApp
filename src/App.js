import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './components/mainPage';
import store from './store'; // Here i have created the store with sagas and reducers
import './styles/index.scss'; // Here i have all scss paths and main css styles
import { IntlProvider } from 'react-intl'; // For Language
import EnMessages from './languages/english.json'; // Here i have all the contents related to the app

/**
 * @returns the Mainpage of the app
 *  In this, i have used "IntlProvider" to handle the language overall app
 *  "locale" and "messages", -- in this we can pass dynamic values according to the user wish for the language
 * 
 * I have used the functional component to make the code clean and clear
 */
const App = () => {
  return <Provider store={store}>
    <IntlProvider locale="en" messages={EnMessages['language']}>
      <MainPage/>
    </IntlProvider>
  </Provider>
};

export default App;
