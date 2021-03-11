import React from 'react';


const CodeLayout = (props) => {
    console.log(typeof(props.data.resume_Data.name));
    
    return(
        <code>
            {JSON.stringify(props.data.resume_Data)}
        </code>
    )
}

export default CodeLayout;