import React from "react";
export const ContextApp = React.createContext();

export const initState = {
  data: [],
  selectData: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      return { ...state, data: [...action.payload] }
    }
    case 'SET_SELECT_DATA': {
      return { ...state, selectData: [...action.payload] }
    }
    default : {
      return state
    }
  }
}