// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const usernameInputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(usernameInputRef.current.value)
  }

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : `Username must be lower case`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
        />
        {error && <p role="alert">{error}</p>}
      </div>
      <button disabled={!!error} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
