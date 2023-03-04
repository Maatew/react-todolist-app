import React from 'react';
import '../stylesheets/feeback.css';

function Feedback(props) {
    return (
        <div className='container-feedback'>
            <img 
                className='imagen-feedback' 
                src={require(`../images/imagen-${props.picture}.png`)} 
                alt='imagen' />   
            <div className='container-text-feedback'>
                <p className='name-feedback'>
                    <strong>{props.name}</strong> en <strong>{props.country}</strong>
                </p>
                <p className='task-feedback'>
                    {props.task} en <strong>{props.company}</strong></p>
                <p className='text-feedback'>"{props.text}"</p>
            </div>          
        </div>
    );
}

export default Feedback;
