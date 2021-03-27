import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError("Failed to sign in")
        }
        setLoading(false)
    }
    return (
    <>
        <Card className="mb-5">
            <Card.Body className="message">
            <h2 className="text-center app-title">Conference Information Application</h2>
            <h2 className="text-center">Admin Portal</h2>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body className="message">
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to='forgot-password'>Forgot Password?</Link>
                    </div>

            </Card.Body>
        </Card>

        <div className="w-100 text-center mt-3">
        Need an Account? <Link to='signup'>Sign Up</Link></div>
    </>
    )
}




//   return (
//     <div>
//         <div id="message">
//            <h2 className="text-center">Conference Information Application</h2>
//            <h1 className="text-center">Admin Portal</h1>
//          </div>      
//          <div>
         
//          <form className="form-2" onSubmit={handleSubmit}>
//              <h1 className="log-in text-center">Log In</h1>
//            <p>
//            <label htmlFor="email" className="block">
//              Email:
//            </label>
//            <input
//             type="email"
//             className="my-1 p-1 w-full"
//             name="email"
//             value = {inputs.email}
//             placeholder="Email"
//             id="userEmail"
//             onChange = {handleChange}
//           />
//             </p>
//             <p >
//           <label htmlFor="password" className="block">
//             Password:
//           </label>
//           <input
//             type="password"
//             className="mt-1 mb-3 p-1 w-full"
//             name="password"
//             value = {inputs.password}
//             placeholder="Password"
//             id="userPassword"
//             onChange = {handleChange}
//           />
//           </p>
//           <p className="sign_in_button">
       
//          <button id="submitButton" className="sign_in_button_button" type="button">Log In </button>
//          {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}

//           </p> 
//         </form>
//         </div>
//         <p className="text-center my-3">
        
//         </p>
//       </div>

//   );
// };

// export default SignIn;