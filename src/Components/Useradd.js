import React, { useState } from 'react'
import './User.css';

const Useradd = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

return (
	<form
		onSubmit={event => {
			event.preventDefault()
			if (!user.name || !user.username) return
				props.addUser(user)
				setUser(initialFormState)
			}}
	>
		<label className='fonts'><b>Name</b></label><br/>
		<input type="text" name="name" value={user.name} onChange={handleInputChange} className=" alignments"/><br/>
		<label className='fonts'><b>Username</b></label><br/>
		<input type="text" name="username" value={user.username} onChange={handleInputChange} className="alignments"/><br/><br/>
		<button  className="colors">Add new user</button>
	</form>
)
}
export default Useradd;