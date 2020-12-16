/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Backdrop, Button, Chip, CircularProgress, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, useTheme } from '@material-ui/core';
import { useStateProvider } from '../Context/StateProvider';
import "./Category.css";

function Category() {

  const [{ response }, dispatch] = useStateProvider();
  const [chips_value, setChipValue] = useState([]);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const [backdrop, setBackDrop] = useState(false);
  // const names = ['Bash', 'DevOps', 'Docker', 'HTML', 'Javascipt', 'Kubernetes','Larvel', 'Linux', 'MySQL', 'PHP', 'WordPress'];
  const numbers = [5, 10, 15, 20];
  const datas = { category, difficulty, questions, chips_value, name, email }
  const themes = useTheme();
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };
  useEffect(() => (response !== undefined ) && setBackDrop(false), [response]);
  const getStyles = (name, chips_value, theme) => {
    return {
      fontWeight: chips_value.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    };
  };

  const handleChip = (event) => {
    setChipValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (datas.name !== "" && datas.email !== "") {
      setBackDrop(true);
      dispatch({
        type: "SET_STATE",
        datas: datas
      });

  }
    else {
      alert("Enter the details to continue");
    }
  };
  const handleClick = () => {
    if (datas.category !== "" && datas.difficulty !== "" && datas.questions !== "") {
      setShow(true);
    }
    else {
      alert("Select the options to proceed forward !!!");
    }
  };

  return (
    <div className="category" style={{ justifyContent: show && "center", transform: response === undefined ? "translateY(0px)" : "translateY(-999px)" }}>
      {show ? "" : <p>Questions will be random according to the category you choose !</p>}
      <div className="category__options">
        <FormControl className="category__form">
          <InputLabel>Category</InputLabel>
          <Select
            defaultValue=""
            disabled={show}
            onChange={(event) => setCategory(event.target.value)}
          >
            <MenuItem value={"any"}>Any Category</MenuItem>
            <MenuItem value={"linux"}>Linux</MenuItem>
            <MenuItem value={"bash"}>BASH</MenuItem>
            <MenuItem value={"uncategorized"}>Uncategorized</MenuItem>
            <MenuItem value={"docker"}>Docker</MenuItem>
            <MenuItem value={"sql"}>SQL</MenuItem>
            <MenuItem value={"cms"}>CMS</MenuItem>
            <MenuItem value={"code"}>Code</MenuItem>
            <MenuItem value={"devops"}>DevOps</MenuItem>
          </Select>
          <FormHelperText>{category === "" ? "Select Something to proceed" : `You have selected ${category}`}</FormHelperText>
        </FormControl>
        <FormControl className="category__form">
          <InputLabel>Difficulty</InputLabel>
          <Select
          defaultValue=""
            onChange={(event) => setDifficulty(event.target.value)}
            disabled={show}
          >
            <MenuItem value={"random"}>Any</MenuItem>
            <MenuItem value={"easy"}>Easy</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"hard"}>Hard</MenuItem>
          </Select>
          <FormHelperText>{difficulty === "" ? "Select Something to proceed" : `You have selected ${difficulty}`}</FormHelperText>
        </FormControl>
        <FormControl className="category__form">
          <InputLabel>Number of questions</InputLabel>
          <Select
          defaultValue=""
            disabled={show}
            onChange={(event) => setQuestions(event.target.value)}
          >
            {numbers.map((number,id) => (<MenuItem key={id} value={number}>{number}</MenuItem>))}
          </Select>
          <FormHelperText>{questions === "" ? "Select Something to proceed" : `You have selected ${questions}`}</FormHelperText>
        </FormControl>
        {!show && <Button variant="contained" color="secondary" style={{ marginTop: 20 }} onClick={handleClick}>Next</Button>}
      </div>
      <form className="category__user" onSubmit={handleSubmit} style={{ transform: show ? "translateX(0px)" : "translateX(1000px)", display: show ? "flex" : "none" }}>
        <div className="category__form">
          <TextField
            helperText={"Please enter your name"}
            variant="outlined"
            label={"Name"}
            style={{ flex: 1, marginBottom: 20 }}
            onChange={(event) => setName(event.target.value)} />
          <TextField
            variant="outlined"
            label={"E-mail"}
            helperText={"Reults will be sent to your email"}
            type="email"
            style={{ flex: 1, marginBottom: 20 }}
            onChange={(event) => setEmail(event.target.value)} />
          <Button variant="contained" color="secondary" type="submit">Start</Button>
          <Button variant="contained" color="primary" onClick={() => setShow(false)}>Back</Button>
        </div>
      </form>
      <Backdrop open={backdrop && response === undefined}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default  Category;