import React from 'react'
import styles from './Contactform.module.css'
import Buttons from '../Buttons/Buttons'
import { MdMessage } from "react-icons/md"
import { IoCallOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { useState } from 'react';
function Contactform() {
 const printvaluess=(e)=>{
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  setdata("Name: "+ e.target[0].value +"Email: "+e.target[1].value+"Text: "+e.target[2].value );
  }
  const [data,setdata]=useState("your data");
  return (

    <div>
       <div className={styles.main}>
        <div className="first">
            <div className={styles.top_btn}>
            <Buttons  text="View Support Chat" icon={<MdMessage />}/>
            <Buttons text="Via Call" icon={<IoCallOutline />}/>

            </div>
            <br />
            <Buttons text="Via Email" icon={<IoMail />} isoutline={true}/>
            <form onSubmit={printvaluess}>
            Name:  <input type='text'  className={styles.inputt}/>
            <br />
            Email:  <input type='text'  className={styles.inputt}/>
            <br />
            Text:  <textarea type='textarea' rows='10' className={styles.inputt} />
<br />
<Buttons text="Submit"  isoutline={false} />
          
            </form>

            <div className="data">{data}</div>
            
          
        </div>
        <div className="second">
        <img src="./shoes.png" alt="Shoes" />
        </div>
      </div>
    </div>
  )
}

export default Contactform
