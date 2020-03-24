import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//css scss imports
import '../static/styles/common.css';
import "../static/styles/styles.scss";

export default class SiteLayout extends Component {
    render() {
        return(
            <div className="orange-theme main-body-section">
                {this.props.children}
            </div>
            
        ) 
    }
}
