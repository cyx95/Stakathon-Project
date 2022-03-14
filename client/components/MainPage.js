import React from 'react';

export default class MainPage extends React.Component {
    render () {
        return (
            <div className='main-page'>
                <h1 id='title'>New York State Hikes!</h1>
                <img className='main-image' src='mainPageImage.jpg'/> 
            </div>
        )
    }
}