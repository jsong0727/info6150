import './App.css';
import Maintab from './Maintab';
import Home from './Home';
import About from './About';
import Privacy from './Privacy';
import Support from './Support';
import Nav from './Nav';

import { useState } from 'react';

function App() {
  
  const defaultPage = document.location.hash.replace('#', '');
  console.log(defaultPage)
  const [page, setPage] = useState(defaultPage || 'Home');
  return (
    <div className="app">
      <header className="app_header">
        <h1>Snowboarding With Jamie</h1>
      </header>

      <div className='content'>
        <Nav setPage={setPage}/>
        {page === 'Home' && <Home/>}
        {page === 'Maintab' && <Maintab/>}
        {page === 'About' && <About/>}
        {page === 'Privacy' && <Privacy/>}
        {page === 'Support' && <Support/>}
      </div>

    </div>
  );
}

export default App;
