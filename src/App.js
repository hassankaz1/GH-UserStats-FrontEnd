import logo from './logo.svg';
import './App.css';
import SearchForm from './Components/SearchForm'
import UserInfo from './Components/UserInfo';
import { useState } from 'react';
import axios from 'axios';


function App() {

  const [showInfo, setShowInfo] = useState(false)

  const [userInfo, setUserInfo] = useState([])




  const makeAPIRequest = async (endpoint) => {

    const res = await axios.get(endpoint)
    return res.data
  }

  console.log("")
  return (
    <>
      {
        !showInfo &&

        <SearchForm setUserInfo={setUserInfo} setShowInfo={setShowInfo} makeAPIRequest={makeAPIRequest} />
      }

      {
        showInfo &&

        <UserInfo data={userInfo} setShowInfo={setShowInfo} />

      }



    </>
  );
}

export default App;
