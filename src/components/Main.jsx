import { useContext, useEffect, useState } from 'react';
import { Input, SelectButton, Wrapper } from '../styled/Components';
import { AdressForm } from './AdressForm';
import { AdressTable } from './AdressTable';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ContextApp } from '../context';


export const Main = () => {

  const { state, dispatch } = useContext(ContextApp);
  const [searchValue, setSearchValue] = useState('')
  const [showSelectList, setShowSelectList] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
    const token = '228391e4c528062c112195d886656ce7ae3ecd7f';

    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Token ' + token
      },
      body: JSON.stringify({ query: searchValue })
    }

    fetch(url, options)
      .then(response => response.json())
      .then(result => dispatch({
        type: 'SET_DATA',
        payload: result.suggestions
      }))
      .catch(error => console.log('error', error));

  }, [searchValue,dispatch])

  const onInputChange = (e) => {
    setShowSelectList(true)
    setSearchValue(e.target.value)
  }

  const SelectHandler = (index) => {
    const data = state.data.filter((item, i) => i === index)
    setSearchValue(data[0].value)
    dispatch({
      type: 'SET_SELECT_DATA',
      payload: data
    })
    setShowSelectList(false)
  }

  const saveHandler = (data) => {
    dispatch({
      type: 'SET_SELECT_DATA',
      payload: data
    })
    setSuccess(true)
    setSearchValue('')
  }

  const onInputInFokus = () => {
    setShowSelectList(true)
  }

  const resetHandler = () => {
    dispatch({
      type: 'SET_SELECT_DATA',
      payload: []
    })
  }

  const closeSnackbar = () => {
    setSuccess(false)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      {!isEdit && <Wrapper>
        <Input
          main={true}
          value={searchValue}
          onChange={onInputChange}
          onFocus={onInputInFokus}
        />
      </Wrapper>}
      {showSelectList && state.data.length !== 0 && <Wrapper style={{
        width: '400px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {state.data.map((item, index) => {
          return (
            <SelectButton
              key={index}
              onClick={() => SelectHandler(index)}
            >
              {item.unrestricted_value}
            </SelectButton>
          )
        })}
      </Wrapper>}
      {isEdit
        ? <AdressForm data={state} toggleEdit={setIsEdit} saveHandler={(data) => saveHandler(data)} />
        : <AdressTable data={state} toggleEdit={setIsEdit} resetHandler={resetHandler} />
      }
      <Snackbar
        open={success}
        SnackbarCloseReason='clickaway'
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={'Сохранено!'}
        onClose={closeSnackbar}
      >
        <Alert onClose={closeSnackbar} severity="success">
          Сохранено!
        </Alert>
      </Snackbar>
    </div>
  );
}