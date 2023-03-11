import React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
        let thisword = word.charAt(0).toUpperCase()+word.slice(1);
        return thisword;
    }

  return (
    props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
    )
}

export default Alert