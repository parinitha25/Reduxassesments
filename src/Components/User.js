import React, { useState, Fragment } from 'react'
import Useradd from './Useradd';
import Useredit from './Useredit';
import UserTable from './Usertable';
import browserhistory  from '../history/browserhistory';




const User = () => {
	// Data
	const usersData = []	

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}
	
	
	return (

		
		<div className="container">
			<div className="row">
			<div className="col-sm-6 col-xl-6 col-lg-6 col-xs-6">
			<h1>React Application</h1>
			</div>
			<div className="col-sm-6 col-xl-6 col-lg-6 col-xs-6">
				<a href="./pract1">Logout</a>
			</div>
			</div>
			<div className="row">
			<div className="col-sm-6 col-xl-6 col-lg-6 col-xs-6">
			{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<Useredit
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
							
						</Fragment>
						
					) : (
						<Fragment>
							<h2>Add user</h2>
							<Useradd addUser={addUser} />
						</Fragment>
					)}
			</div>
			<div className="col-sm-6 col-xl-6 col-lg-6 col-xs-6">
			<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
			</div>
			</div>
		</div>
		
	)
}

export default User;




{/* <h1>React Application</h1>
			<div className="col-sm-6 col-xl-6 col-lg-6 col-xs-6">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<Useredit
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
							
						</Fragment>
						
					) : (
						<Fragment>
							<h2>Add user</h2>
							<Useradd addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="col-sm-6 col-xl-6 col-lg-6 col-xs-6">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div> */}