import { Link } from 'react-router-dom'
import './register.scss'

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus libero, tenetur earum quis blanditiis, ex debitis dolorum odit similique laboriosam commodi voluptate iusto doloremque labore ab alias! Non, temporibus?</p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register