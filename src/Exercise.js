import React from 'react'



//   Exercise 1: //
//  Formatting Values from Controlled element
//  This exercise is all about building a simple password validator. This will be a text input that requires the user to enter
// a password that is at least 4 characters long. If the user enter a password that is less than 4 Characters a small warning message will display

class Validation extends React.Component {
    state = {password: ''}
   

    onFormSubmit = (e) =>{
        e.preventDefault()
        this.props.onInnerSubmit(this.state.password);
    }
    

    render(){
      
    
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <label>Enter Password</label>
                    <input
                    type='password'
                    value={this.state.password}
                    onChange={e => this.setState({password:e.target.value}) } 
                    />
                    {this.state.password.length < 4  ? 'Password Must be at least 4' : ''}
                </form>
    
            </div>
        )
    }
   
}


export {Validation}