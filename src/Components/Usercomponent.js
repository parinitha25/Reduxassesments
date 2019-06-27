import React, { Component } from 'react';
import  './User.css';

class Usercomponent extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            username:'',
            array:[]
           
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
        debugger;
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let reqobj={
            name1:this.state.name,
            username1:this.state.username     
        }
       let x=this.state.array.push(reqobj)
        this.setState({x});
		}
		// handleDelete=(e)=>{
		// 	e.preventDefault();
		// 	let y={

		// 	}
		// 	this.setState({x});
		// }
    render() {
        return (
            <div className="bgcolor">
                <form>
                    <label className="fonts" >React Application</label><br/><br/>
                    <label className="fonts">Add user</label><br/><br/>
                    <label className="alignments">Name</label><br/>
                    <input type="text" name="name" onChange={this.handleChange}  className="alignmentsa" /><br/>
                    <label className="alignments">Username</label><br/>
                    <input type='text' name="username" onChange={this.handleChange}  className="alignmentsa"/><br/>
                    <button type='submit' onClick={this.handleSubmit} className="colors">Add new user</button>         
               <table className="bgcolora">
                   <tr>
                       <th>Name</th>
                       <th>Username</th>
											 <th>Action
											 </th>
                   </tr>
                   <hr/>
                   {this.state.array.map((display) => (
                   <tr>
                        <td>{display.name1}</td>
                        <td>{display.username1}</td>   
												<td><button type="submit" onClick={this.handleChange} value={this.state.array}>edit</button></td>
                   <td><button type="delete" onClick={this.handleDelete}>delete</button></td>                    
                     </tr>
                   ))}
               </table>
              
               </form>
            </div>
        );
    }
}

export default Usercomponent;