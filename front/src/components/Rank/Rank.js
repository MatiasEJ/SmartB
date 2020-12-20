import React from 'react';

class Rank extends React.Component {
  constructor(){
    super();
    this.state = {
      emoji:''
    }
  }

  componentDidMount(){
    this.generateEmoji(this.props.entries);
  }
  componentDidUpdate(prevProps, prevState){
    if( prevProps.entries === this.props.entries && prevProps.name === this.props.name){
      return null;
    }
    this.generateEmoji(this.props.entries)
  }

  generateEmoji = (entries) =>{
    fetch(`${entries}`)
      .then(res=>res.json())
      .then(data=>{
        this.setState({emoji: data.input})
      })
      .catch(e=>console.log(e));
  }
  render(){
    return (
      <div>
        <div className='white f3'>
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {this.props.entries}{`Rank: ${this.state.emoji}`}
        </div>
        <div>

        </div>
      </div>
    );

  }
}


export default Rank;
