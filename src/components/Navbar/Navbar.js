import React, { Component , useState} from 'react'
import './Navbar.css'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Navbar(props){



        return (
            <div className={props.boolshownav ? "animate-nav" : "nav-whole"}>
                <div className= {props.boolshownav ? "circle-nav" :"row nav-cont-whole"}>
            <div className="row nav-row">
                    <div className="col-md-6 img-col">
                        <div className="img-box">
          <div className="scroll-img"><img src="fash3.jpg"></img></div>
                        </div>
                    </div>
                    <div className="col-md-6 cont-col">
                        <div className="cont-list">
                            <div className="list">
                                <div className="heading-no">01.</div>
                                <div className="list-item">Home</div>
                            </div>
                            <div className="list">
                                <div className="heading-no">02.</div>
                                <div className="list-item">About Us</div>
                            </div>
                            <div className="list">
                                <div className="heading-no">03.</div>
                                <div className="list-item">Contact Us</div>
                            </div>
                            <div className="list">
                                <div className="heading-no">04.</div>
                                <div className="list-item">Services</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        )    

        }