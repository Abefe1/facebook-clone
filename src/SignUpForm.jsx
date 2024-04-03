import React, { useState } from "react";
import style from './SignUpForm.module.css'


const SignUpForm = ({page, setPage})=>{

    const number=[]
    for(let i=1; i<=31; i++){
        number.push(i);
    }

    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let date = new Date();
    let year= date.getFullYear();
    const years=[]
    for(let i=1900; i<=year; i++){
        years.push(i);
    }
    const [formDatas, setformDatas] = useState(
        {
            firstName: ``,
            surname: ``,
            email:``,
            password: ``,
            birthDay:``,
            birthMonth:``,
            birtYear:``,
            gender:``
        }
    )

    const handleformDatas = (e)=>{
        const name = e.target.name 
        const value = e.target.value 

        setformDatas((prevState)=>(
            {
                ...prevState,
                [name] : value
            }
        ))
    }


    let firstname=document.getElementById('firstName')
    let lastname=document.getElementById('surname')
    let email=document.getElementById('email')
    let password=document.getElementById('password')
    let Years=document.getElementById('years')
    let month=document.getElementById('months')
    let day=document.getElementById('days')
    let male=document.getElementById('male')
    let female=document.getElementById('female')
    let custom=document.getElementById('custom')

    const infosValidation=[
        {
            element:firstname,
            value:formDatas.firstName
        },{
            element:lastname,
            value:formDatas.surname
        },{
            element:email,
            value:formDatas.email
        },{
            element:password,
            value:formDatas.password
        },{
            element:Years,
            value:formDatas.birtYear
        }, {
            element:month,
            value:formDatas.birthMonth
        }, {
            element:day,
            value:formDatas.birthDay
        }, {
            element:[male, female, custom],
            value:formDatas.gender
        }

    ]

    const genders=[male, female, custom]


    const validate =()=>{
        for(let j=0; j<infosValidation.length; j++){
            if (infosValidation[j].value===``){
                infosValidation[j].element.style.borderColor=`red`
                infosValidation[j].element.style.borderWidth = `2px`
            } else{infosValidation[j].element.style.borderColor = `#CCD0D5`}

            // if (infosValidation[j].value===formDatas.gender){
            //     let array= infosValidation[j].element
            //     for(let k=0; k<array.length; k++){
            //         if(formDatas.gender===``){
            //             array[k].style.borderColor=`red`
            //             array[k].style.borderWidth = `2px`
            //     } else{array[k].style.borderColor = `#CCD0D5`}
            //         }
            //     }

            // if(formDatas.gender===``){
            //     for(let k=0; k<genders.length; k++){
            //         genders[k].style.borderColor=`red`
            //         genders[k].style.borderWidth=`2px`
            //     }
            // } else{genders[k].style.borderColor=`#CCD0D5`}
        }

        
        }
         
    
  

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const closeModal = ()=>{
        setPage((previouState)=> !previouState)
    }

    return(
        <div className={style.mainContainer}>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.toptContainer}>
                    <div className={style.textContainer}>
                        <h4>Sign Up</h4>
                        <p>It's quick and easy.</p>
                    </div>

                    <div onClick={()=>{closeModal()}}  className={style.iconContainer}>
                        {/* <button style={{color:`black`, backgroundColor:`transparent`,  fontSize:`1.5rem`, alignSelf:`top`}} >X</button> */}
                        <p style={{fontSize:`2rem`, fontWeight:`700`}}>x</p>
                    </div>
                </div>

                <hr />

                <div className={style.bottomContainer}>
                      
                    <div className={style.firstInputContainer}>
                        <input id="firstName"  type="text" placeholder="First name" autoFocus name="firstName" value={formDatas.firstName} onChange={(e)=>{handleformDatas(e), validate()}} />
                        <input type="text" id="surname" placeholder="Surname" name="surname" value={formDatas.surname} onChange={(e)=>{handleformDatas(e), validate()}} />
                    </div>

                    <div className={style.secondInputContainer}>
                        <input type="text" id="email" placeholder="Mobile number or email address" name="email" value={formDatas.email} onChange={(e)=>{handleformDatas(e), validate()}} />
                        <input type="password" id="password" placeholder="New Password" name="password" value={formDatas.password} onChange={(e)=>{handleformDatas(e), validate()}} />
                    </div>

                    <div className={style.textAndSelectFieldsContainer}>
                        <p className={style.p}>Date of birth <span className={style.questionMark}>?</span></p>
                        
                        <div className={style.selectFieldsContainer}>
                            <select name="" id="days" value={formDatas.birthDay}>
                                {number.map((digit, index)=>{
                                    return(<option value={digit} key={index}>{digit}</option>)
                                })}
                                 
                            </select>

                            <select name="" id="months" value={formDatas.birthMonth}>
                                {months.map((month, index)=>{
                                    return(<option value={month} key={index}>{month}</option>)
                                })}
                                 
                            </select>

                            <select name="" id="years" value={formDatas.birtYear}>
                                {years.map((year, index)=>{
                                    return(<option value={year} key={index}>{year}</option>)
                                })}
                                 
                            </select>
                        </div>
                        
                    </div>

                    <div className={style.textAndRadioOptionsContainer}>
                        <h5 className={style.p}>Gender <span className={style.questionMark}>?</span></h5>

                        <div className={style.radioOptionsContainer}>
                            <label>
                                <p>Female</p>
                                <input type="radio" name="gender" id="female" value={formDatas.gender} />
                            </label> 

                            <label>
                                <p>Male</p>
                                <input type="radio" name="gender" id="male"  value={formDatas.gender}/>
                            </label>

                            <label>
                                <p>Custom</p>
                                <input type="radio" name="gender" id="custom"  value={formDatas.gender}/>
                            </label>
                        </div>
                    </div>

                    <p>People who use our service may have uploaded your 
                        contact Information to Facebook. <span><a href="http://">Learn more</a></span></p>
                    <p>By clicking Sign Up, you agree to Our Terms, Privacy, Policy and Cookies Policy.
                        You may receive SMS notification from us and can opt out at anytime
                    </p>

                    <button onClick={validate} type="submit">Sign UP</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm