import React, { Component } from 'react';
import "./quantityPicker.css";

class QuantityPicker extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="quantity-picker">
                <button className="btb btn-sm btn-info">+</button>
                <label className="value">1</label>
                <button className="btb btn-sm btn-info">-</button>
            </div>
         );
    }
}
 
export default QuantityPicker;