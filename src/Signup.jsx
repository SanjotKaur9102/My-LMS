import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import style from "./Css/LMSUI.module.css";
import Dashboard from './Dashboard';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
 
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
const navigate= useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        
        const response = await axios.post('/signup', formData);
        console.log(response.data);
        // window.location.href = './Home';
        navigate("/Dashboard");
      } catch (error) {
        console.log(error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    const { username, email, password, confirmPassword } = formData;

    if (!username) errors.username = 'Username is required!';
    if (!email) errors.email = 'Email is required!';
    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';

    return errors;
  };



  return (
    <div data-aos="zoom-out">
    <div className={style.Sroot}>
    {/* <div className={style.Sroot}> */}
     {/* <div className={style.card}> */}
        <div className={style.Signpage} >
      <Card style={{ backgroundColor: 'black', color: 'black', width: '43rem', alignItems: 'center', display: 'flex', height: '34rem', backgroundColor: 'rgba(255, 255, 255, 0.8)'  }}>
        <Card.Body>
          <h2 className='fw-bold' style={{ textAlign: 'center' }}>Signup for a new Account</h2>
          <hr className='my-3' />

          <div>
            <label htmlFor='username' className="form-label">Username</label>
            <input type='text' placeholder='Username' className={`form-control`} onChange={handleChange} name='username' id='username' required />
            {formErrors.username && <p className={style.error}>{formErrors.username}</p>}
            
            {/* <p>{formErrors.username }</p> */}
          </div>

          <div>
            <label htmlFor='email' className="form-label">Email ID</label>
            <input type='email' placeholder='Email' className={`form-control`} onChange={handleChange} name='email' id='email' required />
            {formErrors.email && <p className={style.error}>{formErrors.email}</p>}

            {/* <p>{formErrors.email}</p> */}
          </div>

          <div>
            <label htmlFor='password' className="form-label text-black">Password</label>
            <input type={formData.showPassword ? 'text' : 'password'} placeholder='Password' className={`form-control`} name='password' onChange={handleChange} required />
            {/* <button type="button" onClick={() => togglePasswordVisibility('showPassword')}></button> */}
            {formErrors.password && <p className={style.error}>{formErrors.password}</p>}

            {/* <p>{formErrors.password}</p> */}
          </div>

          <div>
            <label htmlFor='confirmPassword' className="form-label text-black">Confirm Password</label>
            <input type={formData.showConfirmPassword ? 'text' : 'password'} placeholder='Confirm Password' className={`form-control`} name='confirmPassword' onChange={handleChange} required />
            {/* <button type="button" onClick={() => togglePasswordVisibility('showConfirmPassword')}></button> */}
            {formErrors.confirmPassword && <p className={style.error}>{formErrors.confirmPassword}</p>}
                   
            {/* <p>{formErrors.confirmPassword}</p> */}
          </div>

          <div>
         
            <Button className={`rounded-pill mx-5 mt-4 fw-semibold`} style={{ backgroundColor: '#8050EE', borderColor: 'grey', width: '25rem', color: 'white' }} onClick={handleSubmit}>Signup</Button> 
           <br />
            
          </div>
        </Card.Body>
      </Card>
      </div>
    {/* </div> */}
    </div>
     </div>
    
  );
}
