import React from "react";
import facebookCss from './Facebook.module.css'
import { useState } from 'react'


const FacebookComponent = ({setPage, page}) =>{

    const togglePage = ()=>{
        setPage((previousState) => !previousState)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }


    return(
        <div className={page ? facebookCss.backGroundBlur : ``}>
            <div className={facebookCss.mainContainer}>
                <div className={facebookCss.leftContentContainer}>
                    <h1>facebook</h1>
                    <h3>Facebook helps you connect and share with the people in your life.</h3>
                </div>

                <div className={facebookCss.rightFormContainer}>
                    <form onSubmit={handleSubmit} className={facebookCss.Form}>
                        <div className={facebookCss.inputsContainer}>
                            <input className={facebookCss.theInput} autoFocus type="text" placeholder="Email address or phone number" name="addressOrPhone"/>
                            <input type="password" placeholder="password" name="password"/>
                        </div>

                        <div className={facebookCss.buttonAndTextLinkContainer}>
                            <button > Login </button>
                            <p>Forgotten password?</p>
                        </div>

                        <div className={facebookCss.createAccountButton}>
                            <button type="submit" onClick={()=>{togglePage()}}>Create new account</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default FacebookComponent