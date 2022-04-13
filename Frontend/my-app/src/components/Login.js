import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from "axios"
import './style.css';
import pic from "../images/courier.jpg"

const Login = () => {

    const [id , setId] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const history = useHistory()


    const validate = (e) =>{
      e.preventDefault();
     if(email.length === 0){
          alert("enter your email")
      }
      else if(password.length === 0){
          alert("enter your password")
      }
      else{
          const data = {
            "id":id,
              "email":email,
              "password":password
          }
          console.log(data);
          axios.post('http://localhost:9090/admin/login' , data).then((response)=>{
              console.log(data)
              const result = response.data
              console.log(result)
             // console.log(result.id)
            //  console.log(response.status)     
                  //if(result.email === 'admin123@gmail.com' && result.password==='admin123'){
                  if(response.status===200) 
                  {
                      //alert("Login Successfull...")  
                         
                      console.log("Login successful")  
                      localStorage.setItem("admininfo", result.email )
                      history.push('/dashboard')

                  }
                  else{
                      alert("Invalid username or Password")
                     // console.log('Invalid username or Password')
                  }
                      
              
            
          })
        }



    }
  




    return (

  <section class="vh-100">
  <div class="container py-5 h-120 bg-dark">
    <div class="row d-flex justify-content-center align-items-center h-10">
      <div class="col col-xl-10">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src={pic}
                alt="login form"
                class="img-fluid"
              />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3"></i>
                    <span class="h1 fw-bold mb-0">Courier Services</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3">Sign in</h5>

                  <div class="form-outline mb-4">

                    <input type="email"
                     id="email" 
                     class="form-control form-control-lg" 
                     value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <label class="form-label">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password"
                     id="password" 
                     class="form-control form-control-lg" 
                     value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <label class="form-label">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                  <button class="btn btn-dark btn-lg btn-block" id="si" onClick={(e) => validate(e)} >Sign in</button>
                  </div>

                  
                  <p class="mb-5 pb-lg-2"></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );

}
export default Login;