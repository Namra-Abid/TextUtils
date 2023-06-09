import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const textofprop = (word ?? '').toLowerCase();
        return textofprop.charAt(0).toUpperCase() + textofprop.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div class={`alert alert-${props.alert.typ}`} role="alert">
                <strong>{capitalize(props.alert.typ)} : </strong><strong>{props.alert.msg}</strong>
            </div>}

        </div>

    )
}
