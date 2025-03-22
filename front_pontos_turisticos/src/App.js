import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import { Header as PageHeader } from './components/header.js';
import { FilterForm as PageFilterForm } from './components/filterform.js';
import { Body as PageBody } from './components/body.js';

function App() { 
  // const [spots, setSpots] = useState([]);
  
  return (
    <main>
      <PageHeader />
      <PageFilterForm />
      {/* <PageBody spots={spots} /> */}
    </main>
  );
}



export default App;
