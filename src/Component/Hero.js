import React from 'react';
import './Hero.css';

class Hero extends React.Component {
    render () {
        return (
            <div className='hero' id='home'>
                <div className='hero-top'>
                    <h3>
                        Coffee
                    </h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                    </p>
                </div>
                <div className='hero-bot'></div>
            </div>
        )
    }
}
export default Hero;