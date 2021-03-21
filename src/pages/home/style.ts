import styled from 'styled-components'
import ConstellationBackground from '../../assets/Endless-Constellation.svg'

export const HomeContainer = styled.div`
  background-image: url(${ConstellationBackground});
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeModal = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  min-width: 20vw;
  min-height: 50vh;
  background-color: rgba(255,255,255,0.9);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  
  h1 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  img {
    width: 350px;
    margin: 10px;
  }
`

export const HomeForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 350px;
    height: 45px;
    background: #FFF;
    border: 2px solid #90E0EF;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    padding: 8px 20px;
    margin-top: 8px;
    margin-bottom: 10px;
  }

  button {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    border: none;
    font-size: 1.3rem;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    border-radius: 4px;
  }
`
