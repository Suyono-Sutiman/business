import React from 'react';
import './Hero.css';

class Hero extends React.Component {
    render () {
        return (
            <div className='hero'>
                <div className='hero-left'></div>
                <div className='hero-right'>
                    <h3>
                        We are<br/>
                        No[o]ne Business
                    </h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                    </p>
                </div>
                <div className="hero-mid"></div>
            </div>
        )
    }
}
export default Hero;