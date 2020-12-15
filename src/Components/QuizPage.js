/* eslint-disable no-unused-vars */
import { Button, Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Snackbar } from '@material-ui/core';
import React, { useState } from 'react';
import { useStateProvider } from '../Context/StateProvider';
import "./QuizPage.css";
import Alert from '@material-ui/lab/Alert';

function QuizPage() {
  const [{ response, score }, dispatch] = useStateProvider();
  const [ans, setAns] = useState('');
  const [answer, setAnswer] = useState('');
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
  });

  const { vertical, horizontal, open } = state;


  const handleClose__ = () => {
    setState({ ...state, open: false });
  };

  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const length = response.length - 1;
  const handleClick = () => {
    setState({open : true})
    let answer = Object.keys(response[index]?.answers).find(key => response[index]?.answers[key] === ans)
    if (answer === response[index].correct_answer) {
      dispatch({
        type : "SET_SCORE"
      })
      setIndex(index + 1);
      setError(false)
    }
    else {
      dispatch({
        type : "REDUCE_SCORE"
      })
      setIndex(index + 1);
      setError(true);
    }
    if(index === length) {
      dispatch({
        type : "SET_RESPONSE_UNDEFINED",
        final_show : true
      })
    }
  }
  let options = response[index]?.answers;
  return (
    <div className="quiz">
      <Paper variant={"outlined"} className="quiz__container">
        <div className="quiz__inner1" >
          <div className="quiz__status"><span>Score : {score}</span>
          <p>Q.No : {index + 1}/{length + 1}</p></div>
          <div className="quiz__question">
            <p>{response[index]?.question}</p>
          </div>
          <div className="quiz__options">
            <div className="quiz__option">
              <strong><h3>Answers :</h3></strong>
              {options !== undefined && <FormControl component="fieldset">
                <RadioGroup aria-label="Answers" name="answers" value={ans} onChange={(e) => setAns(e.target.value)}>
                  {Object.values(options).map((obj) => (obj === null) ? "" : <FormControlLabel key={obj} value={obj} control={<Radio />} label={obj} />)}
                </RadioGroup>
              </FormControl>}
            </div>
          </div>
        </div>
        <div className="quiz__inner2">
          {/* <Button disabled={index === length} variant="contained" color="default" onClick={() => (index < length) ? setIndex(index + 1) : alert("Last question")}>Next</Button> */}
          <Button style={{ marginLeft: 20, marginRight: 20 }} variant="contained" color="secondary" onClick={() => handleClick()}>Submit</Button>
          {/* <Button disabled={index === 0} variant="contained" color="default" onClick={() => (index > 0) ? setIndex(index - 1) : alert("You have reached the first question")}>Previous</Button> */}
        </div>
      </Paper>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left'  }} open={state.open} onClose={handleClose__} key={state.vertical + state.horizontal} message={error ? "Incorrect Answer" : "Correct Answer"}/> 
    </div>
  )
}

export default QuizPage