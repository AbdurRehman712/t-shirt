import React, { Component } from 'react';
import DesignIcon from '../design/designIcon/DesignIcon';
import './design.css'

class Design extends Component {
    constructor() {
        super();
        this.state = {
            
        };
      }
    
    render() {
        return (
            <div className="canvas">
                <div>
                    <div className="canvas-zoomcontainer">
                        <div className="product">
                            <div>
                                <span>
                                    {this.props.front === true ? 
                                        <img className="product-photo" src="/assets/images/front_large_extended.png" alt=" " />
                                    : ""}
                                    {this.props.back === true ? 
                                    <img className="product-photo" src="/assets/images/back_large_extended.png" alt="product" />
                                    : ""}
                                </span>
                            </div>
                            <div className="canvascontainer-pagecontainer-design">
                                <div className="guideline">
                                    <h5 class="guideline-title">adult</h5>
                                </div>
                                <div className="guideline">
                                    <h5 class="guideline-title">left chest</h5>
                                </div>
                                <div className="guideline">
                                    <h5 class="guideline-title">youth</h5>
                                </div>
                                <div className="design-printablearea">
                                    <div class="design-centerline"></div>
                                    <DesignIcon type="1" key="1" font={this.props.font} handleTextFrontValue={this.handleTextFrontValue} TextFrontValue={this.props.TextFrontValue}/>
                                    <DesignIcon type="2" key="2" font={this.props.font} handleTextFrontValue={this.handleTextFrontValue} TextFrontValue={this.props.TextFrontValue}/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Design
