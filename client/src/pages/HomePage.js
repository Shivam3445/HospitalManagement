import React from 'react'
import Spinner from '../components/shared/Spinner'
import {useSelector} from 'react-redux';
import OtherHomePage from "../components/OtherHomePage/OtherHomePage";

const HomePage = () => {
  const{loading,error}=useSelector(state=>state.auth)
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading ? (
      <Spinner/>
    ):( <div>
      {/* Replace or combine your home page with the other home page */}
      <OtherHomePage />
    </div>
    )}
     
      </>
  );
};

export default HomePage