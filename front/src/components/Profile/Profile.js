import React from 'react';
import './Profile.css'


const Profile = ({isProfileOpen,toggleModal, user}) => {
  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-50 w-25-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80 w-80">
          <h1>{user.name}}</h1>
          <h4>{`Images submited: ${user.entries}`}</h4>
          <h4>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</h4>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input
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
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="user-pet"
              id="pet"
             
            />
          </div>
         
       
          <div className="mt4" style={{display:'flex',justifyContent: 'space-evenly'}}>
            <button className="b pa2 grow pointer hover-white w-40 bg-light-blue" onClick={toggleModal}>Save</button>
            <button className="b pa2 grow pointer hover-white w-40 bg-light-red" onClick={toggleModal}>Cancel</button>
          </div>
          
          </main>
          <div 
          className="modal-close"
          onClick={toggleModal}>
          X
          </div>
      </article>

    </div>
  )
}

export default Profile;