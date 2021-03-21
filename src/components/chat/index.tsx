/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { ChatBoard, ChatContainer, Messages, MessageForm } from './style'
import { io } from 'socket.io-client'
import { v4 as uuid } from 'uuid'
import { IChat, IChatMessage } from '../../Interfaces/IChat'

const myId = uuid()

const socket = io(process.env.SOCKET || 'ws://localhost:8888') // Iniciando conexão com o servidor do websocket

// Após realizado o handshake(HTTP upgrade) é aberta a conexão
socket.on('connect', () => { console.info('[Socket.IO] Connected => A new connection has been established') })

export const Chat = ({ username }: IChat): JSX.Element => {
  const [message, updateMessage] = useState('')
  const [messages, updateMessages] = useState<IChatMessage[]>([])
  const chatContainer = useRef<any>()

  useEffect(() => {
    socket.emit('chat.message', {
      id: myId,
      username: 'PSYCO-BOT',
      message: `Um bicho chamado ${username} acabou de entrar!`
    })
    socket.emit('chat.user', {
      id: myId,
      username
    })
  }, [])

  useEffect(() => {
    const handleNewMessage = (newMessage: IChatMessage) => updateMessages([...messages, newMessage])
    scrollToMyRef()

    // Fica ouvindo os eventos de chat.message configurados igualmente tanto no client quanto no server
    socket.on('chat.message', handleNewMessage)
    return () => { socket.off('chat.message', handleNewMessage) }
  }, [messages])

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (message.trim()) {
      // Envia um evento(pacote) para o server do websocket por meio da conexão aberta
      socket.emit('chat.message', {
        id: myId,
        username,
        message
      })
      updateMessage('')
    }
  }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    updateMessage(event.currentTarget.value)
  }

  const scrollToMyRef = () => {
    const scroll =
      chatContainer.current.scrollHeight -
      chatContainer.current.clientHeight
    chatContainer.current.scrollTo(0, scroll)
  }

  return (
    <ChatContainer>
      <ChatBoard ref={chatContainer}>
        {messages.map((msg: IChatMessage, index: number) =>
         <Messages key={index} className={`messages--${msg.id === myId ? 'mine' : 'other'}`}>
           <div className={`message--${msg.id === myId ? 'mine' : 'other'}`}>
           <p><b>#{msg.username}</b></p>
           {msg.message}
           </div>
         </Messages>
        )}
      </ChatBoard>
      <MessageForm onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Escreva sua mensagem /Enter para enviar" value={message} onChange={handleInputChange}/>
      </MessageForm>
    </ChatContainer>
  )
}
