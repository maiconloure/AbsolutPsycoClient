import React, { useState } from 'react'

export const Chat = (): JSX.Element => {
  const [message, updateMessage] = useState('')
  const [messages, updateMessages] = useState([])

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (message.trim()) {
      updateMessage('')
    }
  }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    updateMessage(event.currentTarget.value)
  }

  return (
    <div>
      <div>

      </div>
      <div>
        <form onSubmit={handleFormSubmit}>

        <input type="text" onChange={handleInputChange}/>
        <button type="submit" onClick={handleFormSubmit}>ENVIAR</button>
        </form>
      </div>
    </div>
  )
}
