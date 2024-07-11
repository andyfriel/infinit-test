import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Details from './Pages/Details';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="details" element={<Details />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
