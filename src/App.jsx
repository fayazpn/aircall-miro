import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/shared/Header.jsx';

const App = () => {
  return (
    <React.Fragment>
      <Helmet>Air Call</Helmet>
      <div className="container">
        <Header />
        <div className="container-view"></div>
      </div>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;
