import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter.jsx';

const App = () => {
  return (
    <React.Fragment>
      <Helmet>Air Call</Helmet>
      {/* <div className="container">
        <Header />
        <div className="container-view">
          <FallbackLoading />
        </div>
      </div> */}
      <AppRouter />
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;
