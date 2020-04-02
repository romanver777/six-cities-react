import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const init = () => {

  ReactDom.render(

      <App/>,
      document.getElementById(`root`)
  );
};

init();
