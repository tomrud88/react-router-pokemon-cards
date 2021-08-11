import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailPage from './DetailPage';
import About from './About';
import Shop from './Shop';

import './App.css';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Nav/>
      <Switch>
      <Route path='/shop' exact>
        <Shop/>
      </Route>
      <Route path='/shop/:id'>
        <DetailPage/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
