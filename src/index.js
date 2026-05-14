import React from 'react';
import ReactDOM from 'react-dom/client';
import Myabout, { Aboutpage,Contactus,Service, } from './pages/About';
import Userinfo from './pages/Userinfo';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   <Myabout />

   <Aboutpage />
   <Contactus></Contactus>
   <Service/>
   <Userinfo></Userinfo>

  </React.StrictMode>
);

