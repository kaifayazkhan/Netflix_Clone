import React, { useEffect } from 'react'
import HomeScreen from './Components/HomeScreen'
import Login from './Components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

const App = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
        }));
      } else {
        // the user is logged out
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {
          !user ? (<Login />) : (
            <Routes>
              <Route exact path='/' element={<HomeScreen />} />
            </Routes>
          )
        }
      </Router>
    </div>
  )
}

export default App