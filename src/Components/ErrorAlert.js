import React from 'react';
import {Message} from "rsuite";

export default function ErrorAlert(props) {
    return(
        <Message
            showIcon
            onClick={props.clearError}
            type={props.error.type}
            title={props.error.type}
            description={props.error.message}
        />
    )
}