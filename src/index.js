import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import reducer from "./store/maincontent";


import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

const storage=configureStore({reducer:reducer})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={storage}><App /></Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
