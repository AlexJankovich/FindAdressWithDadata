import styled from 'styled-components';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';

export const Input = styled(TextField)`
  width:${props=> props.main ? '400px' : '100 %'}
`
export const SelectButton = styled(Button)`
  width:${props=>props.simple? '190px': '400px'}!important;
`

export const Wrapper = styled(Paper)({
  padding: '10px',
  margin: '10px',
  display: 'flex',
  justifyContent: 'center'
})

export const FormWrapper = styled(Grid)({
  minWidth:'400px',
  display: 'grid',
  maxWidth:'600px',
  gridTemplateColumns: '1fr 1fr'
})

export const Text = styled(Typography)`
  padding: 0px 15px;
  border: 1px solid black;
  font-weight:${props=>props.main? 700 : 400}!important;
`
export const ErrorText = styled(Typography)`
  padding: 0px 15px;
  position: absolute;
  top:0;
  right:0;
  color: red
`
