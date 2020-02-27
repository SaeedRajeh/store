import React from 'react';
import './sign-in.styles.scss';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
class SingIn extends React.Component{
    // constructor
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }//end constructor
    // handel change
    handelChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    }
    // handel submit
    handelSubmit = event =>{
        // event.preventDefault();
        this.setState({email:'',password:''});
    }
    // render
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit = {this.handelSubmit} >
                    <label htmlFor="email">Email</label>
                    <FromInput 
                        type="email" 
                        name="email" 
                        id="email" 
                        label = 'Email'
                        value = {this.state.email} 
                        handelChange = {this.handelChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <FromInput 
                        type="password" 
                        name="password" 
                        id="password" 
                        label = 'Password'
                        value = {this.state.password} 
                        handelChange = {this.handelChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton  onClick = {signInWithGoogle}  isGoogleSignIn >{' '}Sign in with google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingIn;