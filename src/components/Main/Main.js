import React, {Component} from 'react';
import Bear from '../Bear/Bear'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './main.css'

export default class Main extends Component{
  render(){
    return (
    <div>
        <div className ='main'>
          <div className ='header'>
              <img className = 'banner' src = {require('../../images/source/banner1@2x.png')} alt =''/>
          </div>
          <div className = 'body'>
            <table><tbody>
              <tr>
                <td><Link to={'/bear'}><img src = {require('../../images/source/图1@2x.png')} alt =''/></Link></td>
                <td><Link to={'/bear'}><img src = {require('../../images/source/图1@2x.png')} alt =''/></Link></td>
              </tr>
              <tr>
                <td><Link to={'/bear'}><img src = {require('../../images/source/图1@2x.png')} alt =''/></Link></td>
                <td><Link to={'/bear'}><img src = {require('../../images/source/图1@2x.png')} alt =''/></Link></td>
              </tr>
            </tbody></table>
          </div>
      </div>

      {/*
        <Switch>
        <Route path='/bear' component={Bear} />
        </Switch>
        */}
    </div>
      )
  }
}
