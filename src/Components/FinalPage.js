import { Button } from '@material-ui/core';
import React from 'react';
import { useStateProvider } from '../Context/StateProvider';
import "./FinalPage.css";
function FinalPage() {
  const [{data,score},dispatch] = useStateProvider();
  const handleClick = () => {
    dispatch({
      type : "SET_DEFAULT"
    })
  }
  return (
    <div className="final">
      <div className="final__container">
        <p>{data?.name}'s Score is {" "}{score}</p>
        <Button variant="contained" onClick={handleClick}color="secondary">Play Again</Button>
      </div>
    </div>
  )
}

export default FinalPage
