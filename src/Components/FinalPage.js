import { Button } from '@material-ui/core';
import React from 'react';
import { useStateProvider } from '../Context/StateProvider';
import "./FinalPage.css";
function FinalPage() {
  const [{score},dispatch] = useStateProvider();
  const handleClick = () => {
    dispatch({
      type : "SET_DEFAULT"
    })
  }
  return (
    <div className="final">
      <div className="final__container">
        <p>Score = {score}</p>
        <Button variant="contained" onClick={handleClick}color="secondary">Play Again</Button>
      </div>
    </div>
  )
}

export default FinalPage
