import React from 'react'
import styles from './Buttons.module.css'



function Buttons(props ) {
  const { isOutline, icon, text, ...rest } = props;
  return (
    <>
    <button  {...rest} classname={styles.primary_btn} style=  {!props.isoutline ? {padding:'18px 12px',
    color:'white',
    backgroundColor: 'black',
    borderRadius:'5px',
    minWidth: '220px' , display:'flex',alignItems:'center',justifyContent:'center '}: {padding:'18px 12px',
      paddingLeft:'185px',
      paddingRight:'180px',
      color:'black',
      backgroundColor: 'white',
      borderRadius:'5px',
      minWidth: '220px' , display:'flex',alignItems:'center',justifyContent:'center '}}>{props.icon}  {props.text}</button>
      
      </>
    
  )
}

export default Buttons
