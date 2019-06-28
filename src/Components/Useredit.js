import React, { useState, useEffect } from 'react'
import './User.css';


const Useredit = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label className='fonts'>Name</label><br/>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} className="alignments" /><br/>
      <label className='fonts'>Username</label><br/>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} className="alignments" /><br/>
      <button  className="alignmentsa">Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default Useredit;