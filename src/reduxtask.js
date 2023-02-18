import React from 'react'
import {  connect } from 'react-redux';

function Reduxtask(props) {
  return (
    <div>

      <button type='button' onClick={props.Ageup}>UP</button>
      
    <div>  your age is :{props.age}</div>

      <button type='button' onClick={props.AgeDown}>DOWN</button>


    </div>
  )
}
const mapStateToProps = state => {

  return {
    age: state.age,
  }
}

const mapDispatchToProps = dispatch =>{
  return{
  Ageup: () => dispatch ({ type: "increaseAge" }),

  AgeDown: () => dispatch({ type:"decreaseAge"})

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reduxtask);

