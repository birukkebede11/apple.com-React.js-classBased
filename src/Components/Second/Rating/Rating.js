import React, { Component } from "react";

class Rating extends Component {

  constructor(){
    super();
     this.state = {
      value: 5,
    };   
  }

  increment = () => {
    if(this.state.value <= 9){
    // increment function arr the rating by 1 
      this.setState((state) => {
        return {
          value: state.value + 1,
        };
      });
    }
  };
  decrement = () => {
    if(this.state.value >= 1){
    // decrement function decreases the rating by 1 
      this.setState((state) => {
        return {
          value: state.value - 1,
        };
      });
    }
  };

  render() {
    // Conditional rendering in React 
    let initialText = "Average rating:";
    let changedText = "You rated this product:"
    let displayText = ""; 

    let counter = 1; 

    if(this.state.value != 5){
      counter = counter + 1; 
    }

    if(counter >= 2){
      displayText = changedText;
    }else{
      displayText = initialText; 
    }

    
    return (
      <div className="rating-wrapper">
        <h3>Please rate this MacBook Air out of 10</h3> 
        <div>
          <button className="negative" onClick={this.decrement}> Rate down </button>
          <button className="postive" onClick={this.increment}> Rate up </button>
          
          <div className="rating-result"> {displayText} {this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default Rating;