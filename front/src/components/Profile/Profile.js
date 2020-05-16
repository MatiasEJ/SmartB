import React from 'react';
import './Profile.css'


class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet,

    }
  }
  
   onFormChange = (e) => {
     switch(e.target.name) {
       case 'user-name':
         this.setState({name: e.target.value})
         break;
       case 'user-age':
         this.setState({age: e.target.value})
         break;
       case 'user-pet':
         this.setState({pet: e.target.value})
         break;
        default:
          
          return;
      }
    }

    onProfileUpdate = (data) =>{

      fetch('http://192.168.99.100:3000/profile/'+this.props.user.id, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ formInput: data})
      })
      .then(response=>{
        this.props.toggleModal();
        this.props.loadUser({ ...this.props.user, ...data});
      })
      .catch(e => console.log(e))
    }

  render(){ 
    const {user} = this.props;
    const {name, age, pet } = this.state;
    return (
      <div className="profile-modal">
      
      <article className="br3 ba b--black-10 mv4 w-50 w-25-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80 w-80">
        <h1>{this.state.name.toUpperCase()}</h1>
        <h4>{`Images submited: ${user.entries}`}</h4>
        <h4>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</h4>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
          <input
            onChange={this.onFormChange}
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            placeholder={user.name}
            type="text"
            name="user-name"
            id="name"
      
          />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="agee">Age</label>
          <input
          onChange={this.onFormChange}
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            placeholder={user.age}
            type="text"
            name="user-age"
            id="age"
           
          />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="pet">Pet</label>
          <input
          onChange={this.onFormChange}
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="user-pet"
            id="pet"
           
          />
        </div>
       
      
        <div className="mt4" style={{display:'flex',justifyContent: 'space-evenly'}}>
          <button 
          className="b pa2 grow pointer hover-white w-40 bg-light-blue" 
          onClick={ () => this.onProfileUpdate({name, age, pet})}
          >Save</button>
          <button 
            className="b pa2 grow pointer hover-white w-40 bg-light-red" 
            onClick={this.props.toggleModal}>
            Cancel</button>
        </div>
        
        </main>
        <div 
        className="modal-close"
        onClick={this.props.toggleModal}>
        X
        </div>
      </article>
  
      </div>
    );
  }
}




export default Profile;