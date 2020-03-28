import React from 'react';
import first from '../Image/first.jpg';
import './Team.css';

class Team extends React.Component {
    render () {
        return (
            <div className='Team'>
                <h3>OUR TEAM</h3>
                <div className='team-blok'>
                    <img src={first} alt='first' className='team-img'/>
                    <div className='team-tag'>
                        <h3>MARK SMITH</h3>
                        <h4>Marketing Manager</h4>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className='team-blok'>
                    <img src={first} alt='first' className='team-img'/>
                    <div className='team-tag'>
                        <h3>MARK SMITH</h3>
                        <h4>Marketing Manager</h4>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className='team-blok'>
                    <img src={first} alt='first' className='team-img'/>
                    <div className='team-tag'>
                        <h3>MARK SMITH</h3>
                        <h4>Marketing Manager</h4>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className='team-blok'>
                    <img src={first} alt='first' className='team-img'/>
                    <div className='team-tag'>
                        <h3>MARK SMITH</h3>
                        <h4>Marketing Manager</h4>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;