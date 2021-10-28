import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import './sass/main.scss';
import AppRouter from '@routes/App.routes';
import { AppProps } from './App.types';
import Spinner from '@components/Spinner';

const App: React.FC<AppProps> = ({
  checkUserSession,
  checkUserSessionAsync,
}) => {

  const history = useHistory();

  useEffect(() => {
    // Necessary to check user auth when clicking browser arrows to navigate history
    history.listen(() => {if (performance.navigation.type == 2){checkUserSession()}})

    checkUserSession();
    setInterval(() => checkUserSessionAsync(), 30000);
  }, []);
  // Return the App component.
  return (
    <div className="App">
      <div className="app__content">
        <AppRouter />
      </div>

      <div className="legalfooter">
        <p>
          Private and Confidential. For Private Preview Purposes Only. Copyright
          (C) 2021 Secure AI Labs, Inc., all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default App;
