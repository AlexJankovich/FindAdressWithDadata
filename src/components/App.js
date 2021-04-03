import '../App.css';
import { useReducer } from 'react';
import { ContextApp, initState, reducer } from '../context'
import { Main } from './Main';


function App() {

  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      <Main />
    </ContextApp.Provider>
  );
}

export default App;
