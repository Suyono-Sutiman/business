import React from 'react';
import './Navbar.css';
import classnames from "classnames";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };
    render () {
        return (
            <div className={classnames('navbar', {'navbar--hidden': !this.state.visible})}>
                <a href='#home'><h2>COFFEE</h2></a>
                <div className={classnames('menu', {'menu--hidden': !this.state.visible})}>
                    <h4><a href='#home'>
                    Home</a>
                    </h4>
                    <h4><a href='#introduction'>
                    Intro</a>
                    </h4>
                    <h4><a href='#vision'>
                    Vision</a>
                    </h4>
                    <h4><a href='#introduction'>
                    Services</a>
                    </h4>
                    <h4><a href='#introduction'>
                    Contact</a>
                    </h4>
                </div>
                <div className='nav'>
                    <h4><a href='#introduction'>
                    Intro</a>
                    </h4>
                    <h4><a href='#vision'>
                    Vision</a>
                    </h4>
                    <h4><a href='#introduction'>
                    Services</a>
                    </h4>
                    <h4><a href='#introduction'>
                    Contact</a>
                    </h4>
                </div>
            </div>
        )
    }
}
export default Navbar;