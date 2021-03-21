import React, { useState } from 'react'
import { HomeContainer, HomeModal, HomeForm } from './style'
import PsycoRandom from '../../assets/random.gif'
import { Chat } from '../../components/chat'

export const Home = (): JSX.Element => {
  const [modal, setModal] = useState(true)
  const [username, setUsername] = useState('')
  const handleHomeModal = () => {
    if (username.trim()) {
      setModal(false)
    }
  }
  const handleUsername = (event: React.FormEvent<HTMLInputElement>) => setUsername(event.currentTarget.value)

  return (
    <HomeContainer>
      {modal
        ? <HomeModal>
        <h1>Bem-vindo ao <b>ABSOLUT-PSYCO</b></h1>
        <img src={PsycoRandom} alt="psyco"/>
        <HomeForm>
          <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsername} required />
          <button onClick={() => handleHomeModal()}>Entrar</button>
        </HomeForm>
      </HomeModal>
        : <Chat username={username} />
      }

    </HomeContainer>
  )
}
