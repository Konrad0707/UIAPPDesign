import React,{Component} from 'react';
import { render } from 'react-dom'
import App from './App.jsx';
import './style.css'
import Bear from './components/Bear/Bear'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Page extends Component {
  render () {
    return (
      <App>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/bear' component={Bear} />
        </Switch>
      </Router>
      </App>
    )
  }
}

render(<Page />, document.getElementById('root'));
