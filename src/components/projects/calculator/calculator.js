import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { appendInput, backSpace, appendEquation, clearEquation, total } from '../../../actions/calcIndex';

class Calculator extends Component {

  render() {
    return (
      <div className="">
        <button onClick={() => this.props.clearEquation()}>C</button>
        <button onClick={() => this.props.appendEquation('/')}>/</button>
        <button onClick={() => this.props.appendInput('7')}>7</button>
        <button onClick={() => this.props.appendInput('8')}>8</button>
        <button onClick={() => this.props.appendInput('9')}>9</button>
        <button onClick={() => this.props.appendEquation('*')}>*</button>
        <button onClick={() => this.props.appendInput('4')}>4</button>
        <button onClick={() => this.props.appendInput('5')}>5</button>
        <button onClick={() => this.props.appendInput('6')}>6</button>
        <button onClick={() => this.props.appendEquation('-')}>-</button>
        <button onClick={() => this.props.appendInput('1')}>1</button>
        <button onClick={() => this.props.appendInput('2')}>2</button>
        <button onClick={() => this.props.appendInput('3')}>3</button>
        <button onClick={() => this.props.appendEquation('+')}>+</button>
        <button onClick={() => this.props.appendInput('0')}>0</button>
        <button onClick={() => this.props.appendInput('.')}>.</button>
        <button onClick={() => this.props.total()}>=</button>
        {console.log(this.props.calcState)}
        <div>
          {this.props.calcState.equation}
        </div>
        <div>
          {this.props.calcState.currentInput}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    calcState: state.calcState
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ appendInput, backSpace, appendEquation, clearEquation, total }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
