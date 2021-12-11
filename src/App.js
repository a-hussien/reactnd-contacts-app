import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsApi from './utils/ContactsAPI'
import CreateContact from './CreateContact';

class App extends Component {

  state = {
    contacts: [],
    screen: 'list'
  }

  componentDidMount() {
    ContactsApi.getAll()
    .then((contacts) => {
      this.setState(() => ({
        contacts
      }))
    })
  }

  removeContact = (contact) => {

    this.setState((currentState) => ({

      contacts: currentState.contacts.filter((filterContact) => {
        return filterContact.id !== contact.id
      })
    }))

    ContactsApi.remove(contact)

  }

  render() {
    const { contacts } = this.state
    return (
      <div>
        {this.state.screen === 'list' && (
          <ListContacts 
          contacts={contacts} 
          onDeleteContact={this.removeContact} 
          onNavigate={() => {
            this.setState(() => ({
              screen: 'create'
            }))
          }}
          />
        )}

        {this.state.screen === 'create' && (
          <CreateContact  />
        )}
        
      </div>
    );
  }
  
}

export default App;
