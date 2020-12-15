export const initial = {
  data: undefined,
  final : false,
  score: 0,
  response : undefined,
}

const reducer = (state,action) => {
  switch(action.type){
    case "SET_DEFAULT":
      return {data : undefined,response : undefined,final : false,score : 0}
    case "SET_RESPONSE":
      return {...state , response : action.response}
    case "SET_RESPONSE_UNDEFINED":
      return {...state , response : undefined,final : action.final_show}
    case "SET_STATE":
      return {
        ...state,data : action.datas
      }
    case "SET_SCORE":
      return {...state,score : state.score + 1}
    case "REDUCE_SCORE":
      return {...state,score : state.score - 1}
    default :
    return state;
  }
}

export default reducer