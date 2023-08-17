import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//wrapped the App with AuthProvider to manage the current user
import { AuthContextProvider} from '../src/context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <AuthContextProvider>
    <App/>
    </AuthContextProvider>,
  </React.StrictMode>
  </>
);

reportWebVitals();
