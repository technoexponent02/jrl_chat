import React from 'react';
import './App.scss';

import Header from './Layout/Header';
import SiteLayout from './Layout/SiteLayout';
import Dashboard from './component/Dashboard';


function App() {
  return (
    <SiteLayout>
      {/* Header component is common for whole site */}
      <Header />

      <Dashboard />
      
    </SiteLayout>
  );
}

export default App;
