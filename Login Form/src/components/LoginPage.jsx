
import './LoginPage.css'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className="container">

      <div className="welcome-panel">
      <div className="left-section">

        <h1>Welcome Back.</h1>
        <p>Please enter your credentials to log in or create a new account.</p>

        <button className="Register-btn">Register</button>
      </div>
      </div>

      <form className="login-form" onSubmit={handleLogin}>

        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              className="toggle-password"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="link-container">

          <div className="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="create-account">
            <p>
              Don't have an account? <a href="#">Create one</a>
            </p>
          </div>

        </div>

        <button className="submit-button" type="submit">
          Sign In
        </button>

      </form>
    </div>
  )
}
