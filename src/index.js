import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
// dataReducer fait référence à dataSlice.reducer qui est exporté par défaut dans slices/index.js
import dataReducer from "./slices";
// Nous allons utiliser le composant Provider pour mettre à disposition notre store sur l'ensemble de l'application. 
import { Provider } from 'react-redux';

// Création du store via Redux Toolkit
const store = configureStore({
  reducer: {
    data: dataReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />   
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
