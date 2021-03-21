import styled from 'styled-components'

import StripesBackground from '../../assets/Vanishing-Stripes.svg'

export const ChatContainer = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  min-width: 35vw;
  height: 70vh;
  background-image: url(${StripesBackground});
  background-size: 500px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.8);
`

export const ChatBoard = styled.div`
  width: 35vw;
  height: 64vh;
  overflow-y: scroll;
  padding: 10px;
`

export const Messages = styled.div`
  margin: 10px 0 0 10px;
  min-height: 30px;
  text-align: left;
  padding: 2px;
  margin: 2px;
  border-radius: 2px;

  &.messages--mine {
    text-align: right;
  }

  p {
    font-size: 0.8rem;
    font-style: italic;
  }

  div {
    background: rgba(255, 255, 255, 0.9);
    width: fit-content;
    padding: 4px;
    border: 1px solid transparent;
    border-radius: 5px;
    display: inline-block;
    list-style: none;
    margin-bottom: 1rem;
    padding: 5px 10px;
    font-size: 0.9rem;
  }

  div.message--mine {
  background: #c3e88d;
  border-color: #82be27;
  text-align: right;
  }

  div.message--other {
    background: #89ddff;
    border-color: #1abeff;
  }
`

export const MessageForm = styled.form`
  
  input {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    min-width: 35vw;
    height: 40px;
    padding: 0 10px;
    border: none;
    outline: none;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    ::-webkit-input-placeholder { 
      font-size: 1rem; 
    }
  }


`
