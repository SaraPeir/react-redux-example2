import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showUsers } from '../actions';
import { changeInputText } from '../actions';
import { Table } from 'react-bootstrap'

class Paragraph extends Component {



  render() {
    return (
      <div>
        <h2>{this.props.parText}</h2>
        <h2>El parrafo en sobre de mi y el input se comunican entre ellos aunque estean separados!</h2>

      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log('state: ', state.user.list);
    console.log('inputState: ', state.inp.inputValue);

  return {

    parText: state.inp.inputValue


  }
}

export default connect(mapStateToProps, { changeInputText })(Paragraph)
//export default Paragraph;
