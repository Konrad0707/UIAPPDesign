import React, {Component} from 'react';
import './bear.css'

export default class Bear extends Component{
  render(){
    return (<div className='Bear'>
      <header>
          <img className = 'banner2' src = {require('../../images/source/图2banner@2x.png')} alt =''/>
      </header>
      <div className="Container_bear">
        <div className="box">
          <center>
            <table className="users"><tbody>
              <tr>
                <td>
                <center>
                  <img className = 'userimg' src = {require('../../images/source/person.jpg')} alt =''/>
                  <p>用户名</p>
                  <p className = "distance">9.99km</p>
                </center>
                </td>
                <td>
                <center>
                  <img className = 'userimg' src = {require('../../images/source/person.jpg')} alt =''/>
                  <p>用户名</p>
                  <p className = "distance">9.99km</p>
                </center>
                </td>
                <td>
                <center>
                  <img className = 'userimg' src = {require('../../images/source/person.jpg')} alt =''/>
                  <p>用户名</p>
                  <p className = "distance">9.99km</p>
                </center>
                </td>
              </tr>
              <tr>
              <td>
              <center>
                <img className = 'userimg' src = {require('../../images/source/person.jpg')} alt =''/>
                <p>用户名</p>
                <p className = "distance">9.99km</p>
              </center>
              </td>
              <td>
              <center>
                <img className = 'userimg' src = {require('../../images/source/person.jpg')} alt =''/>
                <p>用户名</p>
                <p className = "distance">9.99km</p>
              </center>
              </td>
              <td>
              <center>
                <img className = 'userimg' src = {require('../../images/source/person.jpg')} alt =''/>
                <p>用户名</p>
                <p className = "distance">9.99km</p>
              </center>
              </td>
              </tr>
              <tr>
              <td>
              <center>
                <img className = 'userimg' src = {require('../../images/source/person.jpg')} alt =''/>
                <p>用户名</p>
                <p className = "distance">9.99km</p>
              </center>
              </td>
              <td>
              <center>
                <img className = 'userimg' src = {require('../../images/source/person.jpg')} alt =''/>
                <p>用户名</p>
                <p className = "distance">9.99km</p>
              </center>
              </td>
              <td>
              <center>
                <img className = 'userimg' src = {require('../../images/source/person.jpg')} alt =''/>
                <p>用户名</p>
                <p className = "distance">9.99km</p>
              </center>
              </td>
              </tr>
            </tbody></table>
            <img className = 'refresh' src = {require('../../images/source/换一批@2x.png')} alt =''/>
            <h4>换一批</h4>
            <p className="tries">1分钟/次(剩余30次)</p>
          </center>
        </div>
        <img className = 'connector' src = {require('../../images/source/链接棒@2x.png')} alt =''/>
        <img className = 'connector2' src = {require('../../images/source/链接棒@2x.png')} alt =''/>
        <div className = "smallBox">
        <p>点击“换一批”查看更多推荐用户。每点击一次 ”换一批” 将消耗1狂环币。
        <span className="link">获取更多狂欢币>></span></p>
        </div>
      </div>
    </div>)
  }
}
console.log('bear')
