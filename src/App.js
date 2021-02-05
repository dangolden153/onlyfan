import React, {Component} from 'react';
import './App.css';

import Home from './component/home/home'
import SubscribePage from './component/subscibePage/subscrubPage'
import Card  from './component/card/card'
import HeaderNav from './component/headerNav/headerNav'
import SubscriptonPage from './pages/subscribePage/subscribePage'
import NotFoundPage from './component/notFoundPage/notFoundPage'
import Scroll from './component/scroll'
import NetflixApp from './component/netflix/netflix'
import {Route, Switch} from 'react-router-dom'


 class  App extends Component {
  constructor(){
    super();
    this.state={
      isLoginStatus : "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin =(data)=>{
    this.setState({
      isLoginStatus : "LOGGED_IN",
      user: data
    })
  }

  render (){
  return (
    <div className="App">

    <HeaderNav/>
    
<Switch>
  
<Route exact path='/photo=onlyfans546083dfghjlhgfccghjkyj' component={Home} />


<Route
 path='/card'
  render ={ props => (
  <Card {...props} handleLogin={this.handleLogin} isLoginStatus={this.state.isLoginStatus}/>)} />

<Route  
path='/sub'
render ={ props => (
<SubscribePage {...props}  isLoginStatus = {this.state.isLoginStatus}/>)}

 />

{/* <Route  
path='/home'
render ={ props => (
<Home {...props}  isLoginStatus = {this.state.isLoginStatus}/>)}

 /> */}

 <Route path='/subpage' component={SubscriptonPage} />

 <Route path='/error' component={NotFoundPage} />
 <Route path='/scroll' component={Scroll} />
 <Route path='/net' component={NetflixApp}/>

</Switch>
      
    </div>
  )
}
}

export default App;
