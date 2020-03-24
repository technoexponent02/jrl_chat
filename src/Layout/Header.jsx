import React,{ Component } from 'react';
import { connect } from 'react-redux';
import CONSTANTS from '../redux/constants/index';

import { Dropdown } from 'react-bootstrap';
import { MdExpandMore } from "react-icons/md";
// import { ICON_NAME } from "react-icons/md";

class  Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

render() {
    return (
        <header>
            <div className="container-fluid">
                <div className="header-inner">
                    <aside className="logo-section">
                        <p>
                            <img src="../../images/logo.png" alt="logo" />
                        </p>
                    </aside>
                    <aside className="header-right">
                        {/* <Button variant="success">Primary</Button> */}
                        <div className="user-btn-container">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" className="user-profile-btn">
                            <figure><img src="../../images/user_image.png" alt="user_image" /></figure>
                                <span>Hang liang</span><MdExpandMore className="down-caret"/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => this.props.loginClick() }>Login</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.props.registerClick() }>Register</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </aside>
                    </div>
                </div>
                </header>
            );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginClick: () => {dispatch({type: CONSTANTS.TOGGLE_LOGIN_MODAL})},
      registerClick: () => {dispatch({type: CONSTANTS.TOGGLE_REGISTER_MODAL})}
  }
}

export default connect(null,mapDispatchToProps)(Header);