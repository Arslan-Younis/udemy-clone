import React, {useEffect, Fragment} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Header from "./component/Header";
import Main from './component/Main';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import ResetPassword from './component/auth/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import firebase from './firebase';
import { useDispatch, useSelector  } from 'react-redux';
import * as Actions from './store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        dispatch(Actions.setUser(user));
      }

      if(!user){
        dispatch(Actions.setUser(null));
      }
    })
     
  },[dispatch])
  return (
    <Fragment>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/signin" render={(routeProps) => <SignIn {...routeProps} />} />
      <Route exact path="/signup" render={(routeProps) => <SignUp {...routeProps} />} />
      <Route exact path="/resetpassword" render={(routeProps) => <ResetPassword {...routeProps} />} />
    </Switch>
    </Fragment>
    );
}

export default App;
