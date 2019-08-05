import React from 'react';
import {Fragment} from "react"
import {Switch, Route} from 'react-router-dom'
import "materialize-css/dist/css/materialize.min.css"
import Index from './Index/Index';
import "./App.css"

class App extends React.Component
{
  render()
  {
    return(
      <Fragment>
        <Switch>
          <Route exact path="/" render={(props)=>(<Index />)}/>
          <Route path="/admin" render={(props)=><div>Admin</div>}/>
        </Switch>
      </Fragment> 
    )
  }
}

export default App;