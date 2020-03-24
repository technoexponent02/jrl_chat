import React, { Component } from "react";
import { connect } from 'react-redux'
import CONSTANTS from '../../redux/constants/index';
import validate from '../../action/validation';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdLocationOn,
  MdExpandMore,
  MdWarning
} from "react-icons/md";
import { IoMdMale } from "react-icons/io";
// import CustomScroll from 'react-custom-scroll';
import {
  Modal,
  Form,
  Button
} from "react-bootstrap";

class RegistarModal extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "",
          email: "",
          password: "",
          repassword: "",
          gender: "",
          country: "",
          TermsApproved: false,
          errMsg: false,
          validationTest: false
        }     
    }

    componentDidUpdate(prevProps){
      if(prevProps.ModalReducer.registerModal !== this.props.ModalReducer.registerModal){
        console.log("modal didUpdate")
        this.setState({
          name: "",
          email: "",
          password: "",
          repassword: "",
          gender: "",
          country: "",
          TermsApproved: false,
          errMsg: false,
          validationTest: false
        })
      }
    }
    getFormData = (type = "" , e) => {
      if(type === "check"){
        this.setState({TermsApproved: e.target.checked })
      }else{
        this.setState({[e.target.name]: e.target.value})
      }
    }

    validateRegistrationForm = () => {
      return new Promise((resolve, reject) => {
        if(validate.text(this.state.name) &&
           validate.text(this.state.email) &&
           validate.text(this.state.password) &&
           validate.text(this.state.gender) &&
           validate.text(this.state.country) &&
           this.state.TermsApproved !== false &&
           validate.rePassWordCheck(this.state.password,this.state.repassword)){
            resolve(true)
           }else{
             reject(false)
           }
      })
    }

    registerUser = () => {
      this.setState({validationTest: true} , () => {
        this.validateRegistrationForm().then((res) => {
          console.log(res);
          if(res){
            console.log("Save user data");
            console.log(this.state);
          }
        })
      })
    }
    
    render(){
      // console.log(this.state)
        return (
            <div>
              
                {/* <Button variant="primary" onClick={() => this.props.registerClick()}>
                  Register
                </Button> */}
        
                {/* <RegisterModalBody
                  show={this.props.ModalReducer.registerModal}
                  onHide={() => this.props.registerClick()}
                /> */}

              <Modal show={this.props.ModalReducer.registerModal} onHide={() => this.props.registerClick()}  centered className="RegisterModal">
                    <Modal.Body>
                      <div className="register-logo-container">
                        <img src="../../../images/register-logo.png"  alt="register-logo"/>
                      </div>
                      <h2 className="registration-heading">Registration</h2>
                      {
                        this.state.errMsg &&
                        <div className="reg-info-msg">
                          <MdWarning />
                        Message if the password is Unacceptable
                        </div>
                      }                      

                      <div className="reg-form-container">
                      {/* <CustomScroll heightRelativeToParent="calc(100% - 20px)"> */}
                        <Form>
                          <Form.Group className="reg-form-group error">
                            <Form.Label>Nick Name</Form.Label>
                            <Form.Control type="text"
                             name = "name"
                             value= {this.state.name}
                             onChange={this.getFormData.bind(this, "")}
                             placeholder="Nick Name" />
                          </Form.Group>

                          <Form.Group className="reg-form-group">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                             name = "email"
                             value= {this.state.email}
                             onChange={this.getFormData.bind(this, "")}
                             placeholder="Your-Email@example.com" />
                          </Form.Group>

                          <Form.Group className="reg-form-group">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                             name = "password"
                             value= {this.state.password}
                             onChange={this.getFormData.bind(this, "")}
                             placeholder="" />
                          </Form.Group>

                          <Form.Group className="reg-form-group">
                            <Form.Label>Re-type Password</Form.Label>
                            <Form.Control type="password"
                             name = "repassword"
                             value= {this.state.repassword}
                             onChange={this.getFormData.bind(this, "")}
                             placeholder="" />
                          </Form.Group>

                          <Form.Group className="reg-form-group">
                            <Form.Label>Gender</Form.Label>
                            <div className="icon-field">
                              <IoMdMale className="location-mark" />
                              <MdExpandMore className="dropdown-icon" />
                              <Form.Control as="select"
                               name = "gender"
                               value= {this.state.gender}
                               onChange={this.getFormData.bind(this, "")}
                               className="country-select">
                                <option>Choose...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </Form.Control>
                            </div>
                          </Form.Group>

                          <Form.Group className="reg-form-group">
                            <Form.Label>Country</Form.Label>
                            <div className="icon-field">
                              <MdLocationOn className="location-mark" />
                              <MdExpandMore className="dropdown-icon" />
                              <Form.Control as="select" 
                              name = "country"
                              value= {this.state.country}
                              onChange={this.getFormData.bind(this, "")}
                              className="country-select">
                                <option>Choose Country</option>
                                <option value="india">India</option>
                                <option value="korea">Korea</option>
                                <option value="china">China</option>
                                <option value="iran">Iran</option>
                              </Form.Control>
                            </div>
                          </Form.Group>

                          <Form.Group className="reg-form-group text-center">

                              <img src="../../../images/recaptcha.png" alt="recaptcha"/>
                              </Form.Group>

                          <Form.Group className="reg-form-group">
                            <label className="check-mark-label">
                              <input type="checkbox"
                                name="TermsApproved"
                                value={this.state.TermsApproved}
                                onChange={this.getFormData.bind(this,"check")} />
                              <span className="check-mark">
                                  <MdCheckBox className="check" />
                                  <MdCheckBoxOutlineBlank className="uncheck" />                                
                              </span>
                              Approval of the terms
                            </label>
                          </Form.Group>

                          <Form.Group className="reg-form-group">
                            <Button className="submit-btn"
                            onClick={this.registerUser}
                            variant="link">
                              SUBMIT
                            </Button>
                          </Form.Group>
                        </Form>
                        {/* </CustomScroll> */}
                      </div>
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
        registerClick: () => {dispatch({type: CONSTANTS.TOGGLE_REGISTER_MODAL})},
        alreadyHaveAccount: () => {dispatch({type: CONSTANTS.HAVE_ACCOUNT})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegistarModal);
