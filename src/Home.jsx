import React from "react";
import style from './Home.module.css';
import { useState } from 'react'


const Home = ({setPage, page}) =>{

    const togglePage = ()=>{
        setPage((previousState) => !previousState)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }


    return(
        <div className={page ? style.backGroundBlur : ``}>
            <div className={style.mainContainer}>
                <div className={style.leftContentContainer}>
                    <div className={style.textDiv}>
                        <h1>facebook</h1>
                        <h3>Facebook helps you connect and share with the people in your life.</h3>
                    </div>
                </div>

                <div className={style.rightFormContainer}>
                    <form onSubmit={handleSubmit} className={style.Form}>
                        <div className={style.inputsContainer}>
                            <input className={style.theInput} autoFocus type="text" placeholder="Email address or phone number" name="addressOrPhone"/>
                            <input type="password" placeholder="password" name="password"/>
                        </div>

                        <div className={style.buttonAndTextLinkContainer}>
                            <button > Login </button>
                            <p>Forgotten password?</p>
                        </div>

                        <div className={style.createAccountButton}>
                            <button type="submit" onClick={()=>{togglePage()}}>Create new account</button>
                        </div>
                    </form>

                    <div className={style.lastDiv}><p><span>Create a Page</span> for a celebrity, brand or business </p></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home