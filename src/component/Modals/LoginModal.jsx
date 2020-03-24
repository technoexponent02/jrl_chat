import React, { Component } from "react";
import { connect } from 'react-redux'
import CONSTANTS from '../../redux/constants/index';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdExpandMore,
  MdWarning,
  MdKeyboardBackspace
} from "react-icons/md";
import { IoMdMale } from "react-icons/io";
// import CustomScroll from 'react-custom-scroll';
import {
  Modal,
  Form,
  Button
} from "react-bootstrap";


class LogInModal extends Component {
    
    render() {
        console.log(this.props.ModalReducer.loginModal);
        return (
            <div>
              
                {/* <Button variant="primary" onClick={() => this.props.loginClick()}>
                  Login
                </Button> */}
        
              <Modal show={this.props.ModalReducer.loginModal}
                onHide={() => this.props.loginClick()}
                centered className="RegisterModal">
              {/* <Modal.Header closeButton></Modal.Header> */}
                <button className="modal-close-btn"><MdKeyboardBackspace /></button>
                <Modal.Body>
                  <div className="register-logo-container">
                    <img src="../../../images/register-logo.png" alt="register_logo"/>
                  </div>
                  <h2 className="registration-heading">Login</h2>
                  <div className="reg-info-msg">
                    <MdWarning />
                    Message if the username or password is wrong
                  </div>
                  <Form>
                    <Form.Group className="mb-3 mt-3">
                      <label className="toggle-btn">
                        <input type="checkbox" />
                        <span className="check-mark"></span>
                        Login as a guest
                      </label>
                    </Form.Group>

                    <Form.Group className="reg-form-group">
                      <Form.Label>Nick Name</Form.Label>
                      <Form.Control type="text" placeholder="Nick Name" />
                    </Form.Group>

                    <Form.Group className="reg-form-group">
                        <Form.Label>Gender</Form.Label>
                        <div className="icon-field">
                          <IoMdMale className="location-mark" />
                          <MdExpandMore className="dropdown-icon" />
                          <Form.Control as="select" className="country-select">
                            <option>Choose...</option>
                            <option>...</option>
                          </Form.Control>
                        </div>
                      </Form.Group>
                    <Form.Group className="reg-form-group">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>

                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group className="reg-form-group">
                          <label className="check-mark-label">
                            <input type="checkbox" />
                            <span className="check-mark">
                              <MdCheckBoxOutlineBlank className="uncheck" />
                              <MdCheckBox className="check" />
                            </span>
                            Remember Me
                          </label>
                        </Form.Group>
                      </div>
                      <div className="col-lg-6 text-right">
                        <span className="forgot-password-link">
                          Forgot Pasword ?
                        </span>
                      </div>
                    </div>

                    <Form.Group className="reg-form-group text-center">
                      <p className="not-an-account">
                        You don’t have an account ? <span>Create free account</span>
                      </p>
                    </Form.Group>

                    <Form.Group className="reg-form-group">
                      <Button className="submit-btn" variant="link">
                        SUBMIT
                      </Button>
                    </Form.Group>
                  </Form>
                  {/* </CustomScroll> */}
                  {/* </div> */}
                </Modal.Body>
              </Modal>
            </div>
          );
    }  
}

const mapStateToProps = (state) => {
    return {
        ModalReducer: state.ModalReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginClick: () => {dispatch({type: CONSTANTS.TOGGLE_LOGIN_MODAL})},
        DontHaveAccount: () => {dispatch({type: CONSTANTS.DONT_HAVE_ACCOUNT})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogInModal);
