import React from 'react';
import authFirebase from "../config/firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
    from 'mdb-react-ui-kit';
    const {Component} = require("react")
    
class Login extends Component {

    state= {
        email: '',
        password: ''
      }
      handleLogin= () => {
        console.log(this.state);
    
        signInWithEmailAndPassword (authFirebase, this.state.email, this.state.password)
      .then((userCredential) => {
        window.location.href= './'
        console.log(userCredential)
        const jwtToken = userCredential.user.accessToken
        localStorage.setItem("accesstoken",jwtToken )
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert (errorMessage)
      });
    
      }
    
      handleOnChange= (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }

      render() {
    return (
        <>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-dark-50 mb-5">Please enter your email and password!</p>

                               
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' onChange={this.handleOnChange} labelClass='text-white' placeholder='Enter email' id='email' type='email' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' onChange={this.handleOnChange} labelClass='text-white' placeholder='Enter password' id='password' type='password' size="lg" />
                                <MDBBtn className='w-100 mb-4' size='md' onClick={this.handleLogin}>Login</MDBBtn>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="/register" class="text-info fw-bold">Sign Up</a></p>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );
}
}

export default Login;