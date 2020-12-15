import React, { useEffect } from 'react'
import "./App.css";
import { useStateProvider } from './Context/StateProvider';
import axios from "axios";
import QuizPage from './Components/QuizPage';
import Category from './Components/Category';
import FinalPage from './Components/FinalPage';
function App() {
  const API_KEY = "8QOzZnKgftwBO9RKZSzhsClUwOjwQ8lZLTXR5EfK"
  const [{data,response,final},dispatch] = useStateProvider();
  useEffect(() => {
    data !== undefined && axios.get(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=${data?.questions}&difficult=${data?.difficulty}`)
    .then(response => dispatch({
      type : "SET_RESPONSE",
      response : response.data
    }))
    .catch(err => console.log(err))
  },[data, dispatch]);
  return (
    <div className="app">
      <Category />
      {response !== undefined && <QuizPage />}
      {final && <FinalPage/>}
    </div>  
  )
}

export default App
