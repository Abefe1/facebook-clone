import React, { useState } from "react";
import signUpCss from './SignUpForm.module.css'


const SignUpFormComponent = ({page, setPage})=>{

    const [formData, setFormData] = useState(
        {
            firstName: ``,
            surname: ``,
            email:``,
            password: ``
        }
    )

    const handleFormData = (e)=>{
        const name = e.target.name 
        const value = e.target.value 

        setFormData((prevState)=>(
            {
                ...prevState,
                [name] : value
            }
        ))
    }


    const auth =()=>{
        if(formData.firstName === ``){
            document.getElementById('firstName').style.borderColor = `red`
        }else {
            document.getElementById(`firstName`).style.borderColor = `#CCD0D5`
        }

        if(formData.surname === ``){
            document.getElementById(`surname`).style.borderColor = `red`
        }else {
            document.getElementById(`surname`).style.borderColor = `#CCD0D5`

        }

        if(formData.email === ``){
            document.getElementById('email').style.borderColor = `red`
        }else {
            document.getElementById(`email`).style.borderColor = `#CCD0D5`
        }

        if(formData.password === ``){
            document.getElementById('password').style.borderColor = `red`
        }else {
            document.getElementById(`password`).style.borderColor = `#CCD0D5`
        }
    }
  

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const closeModal = ()=>{
        setPage((previouState)=> !previouState)
    }

    return(
        <div className={signUpCss.mainContainer}>
            <form onSubmit={handleSubmit} className={signUpCss.form}>
                <div className={signUpCss.toptContainer}>
                    <div className={signUpCss.textContainer}>
                        <h4>Sign Up</h4>
                        <p>It's quick and easy.</p>
                    </div>

                    <div onClick={()=>{closeModal()}}  className={signUpCss.iconContainer}>
                        <i style={{backgroundColor:`transparent`}} class="fa-solid fa-x"></i>
                    </div>
                </div>

                <div className={signUpCss.bottomContainer}>
                      
                    <div className={signUpCss.firstInputContainer}>
                        <input id="firstName"  type="text" placeholder="First name" autoFocus name="firstName" value={formData.firstName} onChange={(e)=>{handleFormData(e), auth()}} />
                        <input type="text" id="surname" placeholder="Surname" name="surname" value={formData.surname} onChange={(e)=>{handleFormData(e), auth()}} />
                    </div>

                    <div className={signUpCss.secondInputContainer}>
                        <input type="text" id="email" placeholder="Mobile number or email address" name="email" value={formData.email} onChange={(e)=>{handleFormData(e), auth()}} />
                        <input type="password" id="password" placeholder="New Password" name="password" value={formData.password} onChange={(e)=>{handleFormData(e), auth()}} />
                    </div>

                    <div className={signUpCss.textAndSelectFieldsContainer}>
                        <p>Date of birth?</p>
                        
                        <div className={signUpCss.selectFieldsContainer}>
                            <select name="" id="">
                                <option value=""> 30</option>
                                <option value="">31</option>
                                <option value="">1</option>
                            </select>

                            <select name="" id="">
                                <option value=""> Mar</option>
                                <option value="">Apr</option>
                                <option value="">May</option>
                            </select>

                            <select name="" id="">
                                <option value=""> 2024</option>
                                <option value="">2025</option>
                                <option value="">2026</option>
                            </select>
                        </div>
                        
                    </div>

                    <div className={signUpCss.textAndRadioOptionsContainer}>
                        <h5>Gender?</h5>

                        <div className={signUpCss.radioOptionsContainer}>
                            <label>
                                <p>Female</p>
                                <input type="radio" name="gender" id="" />
                            </label> 

                            <label>
                                <p>Male</p>
                                <input type="radio" name="gender" id="" />
                            </label>

                            <label>
                                <p>Custom</p>
                                <input type="radio" name="gender" id="" />
                            </label>
                        </div>
                    </div>

                    <button onClick={auth} type="submit">Sign UP</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpFormComponent