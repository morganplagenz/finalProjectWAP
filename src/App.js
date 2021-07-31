import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavBar';
import Footer from './components/Footer';

export default function Homepage(){
  return(
      <div className="row background-content">
      <NavMenu />
      <Footer />
      </div>
  );
};
