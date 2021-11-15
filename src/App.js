import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (   
      <BrowserRouter>
        <Switch>         
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/hats' component={HatsPage} />         
        </Switch>
      </BrowserRouter>      
  )  
}

export default App;
