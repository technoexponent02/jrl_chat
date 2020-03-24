import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios'
import CONSTANTS from '../redux/constants/index';

import RegistarModal from './Modals/RegisterModal';
import LoginModal from './Modals/LoginModal';


import { FaSearch, FaUsers, FaComment } from "react-icons/fa";
import {
    MdVideocam,
    MdPhone,
    MdVolumeUp,
    MdPhonelinkLock,
    MdAdd,
    MdPeopleOutline,
    MdMoreHoriz
  } from "react-icons/md";
  


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            roomList: [],
            listLoading: false
        }
    }

    componentDidMount(){
        console.log("didMount");
        const headers = {
            'Content-Type': 'application/json'
        }
        this.setState({listLoading: true} , () => {
            Axios.get('http://www.mocky.io/v2/5e6772b83100000c8f23094d',headers).then((res)=> {
            // console.log(res);
                if(res.status === 200 && res.statusText === "OK"){
                    this.setState({
                        roomList: res.data,
                        listLoading: false
                    })
                }else{
                    this.setState({
                        ...this.state,
                        listLoading: false
                    })
                }
            }).catch(err => {
                this.setState({
                    ...this.state,
                    listLoading: false
                })
                console.log(err);
            })
        });

    }

    openLogInForLockedRoom(room){
      if(room.passwordProcted){
        this.props.loginClick()
      }
    }

    render() {
        // console.log(this.state);
        const { listLoading , roomList } = this.state;
        return (
            <div className="chat-room-listing">
                    <div className="container-fluid">
                        <div className="chat-room-listing-top-section">
                            <div className="chat-left-search">
                                <div className="search-box">
                                    <input placeholder="Search Group" />
                                    <FaSearch className="search-icon" />
                                </div>
                            </div>
                            <div className="right-chat-count">
                                <p className="total-search-result m-0">
                                    <strong>Online user the last 24 hours</strong> <FaUsers className="group-result" /><span>55,6544</span>
                                </p>
                            </div>
                        </div>

                        <div className="group-listing-container">
                        {
                            !listLoading && roomList && roomList.length > 0 &&
                            roomList.map((room, index) => (
                                <div key={index} className="chat-group-outer" onClick={this.openLogInForLockedRoom.bind(this,room)}>
                                    <div className="chat-group-inner">
                                        <div className="group-count">
                                            <FaUsers className="group-icon" />{`${room.availableMember}/${room.totalMember}`}
                                            </div>
                                        <div className="group-info">
                                            <div className="group-image">
                                                <figure><img src={`../../images/${room.avatarFilePath}`} alt="avatar"/></figure>
                                            </div>
                                            <div className="group-details">
                                                <h5>{room.roomName}</h5>
                                                <h6>{room.roomDescription}</h6>
                                            </div>
                                        </div>
                                        <div className="group-action-row">
                                          {/* Locked checking */}
                                            {
                                              room.passwordProcted &&
                                              <button>
                                                <MdPhonelinkLock />
                                                </button>  
                                            }
                                            {/* room Type checking */}
                                            
                                            {
                                                room.roomType === "text_audioVideo" &&
                                                <>
                                                <button>
                                                    <MdVideocam />
                                                </button>
                                                <button>
                                                    <MdPhone />
                                                </button>
                                                <button>
                                                    <FaComment />
                                                </button> 
                                                </>
                                            }
                                            {
                                                room.roomType === "text_audio" &&
                                                <>
                                                <button>
                                                    <MdPhone />
                                                </button>
                                                <button>
                                                    <FaComment />
                                                </button> 
                                                </>
                                            }
                                            {
                                                room.roomType === "text_talk" &&
                                                <>
                                                <button>
                                                    <MdVolumeUp />
                                                </button>     
                                                <button>
                                                    <FaComment />
                                                </button> 
                                                </>
                                            }
                                            {
                                                room.roomType === "text" &&   
                                                <button>
                                                    <FaComment />
                                                </button>
                                            }
                                              
                                        </div>
                                    </div>
                                </div>
                            ))                        
                        }
                        </div>
                        
                        {/* Loading Area */}

                        {
                            listLoading &&
                            <div className="d-flex justify-content-center mt-5 p-5">
                                {
                                    [...Array(5)].map((val,i) => (
                                        <React.Fragment key={i}>
                                            <div className="spinner-grow text-warning" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-info" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </React.Fragment>
                                    ))
                                }
                                
                                
                            </div>
                        }
                       
                    </div>
		                
                    <RegistarModal />
                    <LoginModal />

                    {/* mobile menu */}
                        <div className="mobile-navbar">
                        <button className="mobile-menu-btn active">
                            <figure>
                            <img src="../static/images/room3x.png"  alt="Images"/>
                            </figure>
                            <span>ROOMS</span>
                        </button>
                        <button className="mobile-menu-btn">
                            <figure>
                            <img src="../static/images/live3x.png" alt="Images"/>
                            </figure>
                            <span>LIve</span>
                        </button>
                        <button className="mobile-menu-btn">
                            <figure>
                            {/* <img src="../static/images/live3x.png" /> */}
                            <MdAdd className="btn-icon" />
                            </figure>
                            <span>Chats</span>
                        </button>
                        <button className="mobile-menu-btn">
                            <figure>
                            <span className="counter">99+</span>
                            <MdPeopleOutline className="btn-icon" />
                            {/* <img src="../static/images/friends3x.png" /> */}
                            </figure>
                            <span>Friends</span>
                        </button>
                        <button className="mobile-menu-btn">
                            <figure>
                            <MdMoreHoriz className="btn-icon" />
                            {/* <img src="../static/images/more3x.png" /> MdMoreHoriz */}
                            </figure>
                            <span>More</span>
                        </button>
                        </div>
                </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginClick: () => {dispatch({type: CONSTANTS.TOGGLE_LOGIN_MODAL})}
  }
}

export default connect(null,mapDispatchToProps)(Dashboard)
