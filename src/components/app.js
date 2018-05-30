import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showUsers } from '../actions';
import { changeInputText } from '../actions';
import { Table } from 'react-bootstrap';
import Paragraph from './paragraph';

class App extends Component {

  componentWillMount() {
    this.props.showUsers()
  }

  renderUsersList() {
    return this.props.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Users List</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <input value = {this.props.inputText} onChange = {this.props.changeInputText} />
            <p>{this.props.inputText}</p>
            { this.renderUsersList() }
          </tbody>
          <Paragraph />
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log('state: ', state.user.list);
    console.log('inputState: ', state.inp.inputValue);

  return {
    users: state.user.list, //user es el nombre del elemento user associado al objecto rootReducer (in reducers/index.js.). user esta a su vez associado a show users, que es la funcion accion associada a users.js (in redduers). List es el estado que esta in reducers/users.js. Users es el nombre de la propeidad
    inputText: state.inp.inputValue


  }
}

export default connect(mapStateToProps, { showUsers, changeInputText })(App)
