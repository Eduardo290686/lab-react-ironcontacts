import React, { Component } from 'react';
import './App.css';
import contacts from "./contacts.json";
import Celebrity from "./Celebrity"


class App extends Component {

  constructor() {
    super();
    this.contactsArr = [...contacts];
    this.state = {
      currentCebs: this.contactsArr.slice(0, 5)
    };
  }

  sortByName = () => {
    let contacts = [...this.state.currentCebs];
    let sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      currentCebs: sortedContacts
    })
  }

  sortByPopularity = () => {
    let clonedContacts = [...this.state.currentCebs];
    let sortedContacts = clonedContacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      currentCebs: sortedContacts
    })
  }

  addRandomContact = () => {
    let numberOfContacts = contacts.length;
    let randomNumber = Math.floor(Math.random() * (numberOfContacts -1));
    let randomCeb = contacts[randomNumber];
    let clonedContacts = [...this.state.currentCebs];
    clonedContacts.push(randomCeb);
    this.setState({
      currentCebs: clonedContacts
    })
  }

  deleteContact = (id) => {
    let idToDelete = id;
    let clonedContacts = [...this.state.currentCebs];
    let newContactsArr = [];
    newContactsArr = clonedContacts.filter((contact) => {
      return contact.id !== idToDelete;
    })
    this.setState({
      currentCebs: newContactsArr
    })
  }

  render() {
    return (
      <div className="App">
        <table>
          <caption>
            IronContacts
          </caption>
          <thead>
            <tr>
              <td><button onClick={this.addRandomContact}>Add Random Contact</button></td>
              <td><button onClick={this.sortByName}>Sort by name</button></td>
              <td><button onClick={this.sortByPopularity}>Sort by popularity</button></td>
              <td></td>
            </tr>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.currentCebs.map((ceb) => {
              return (
                <Celebrity
                  pictureUrl={ceb.pictureUrl}
                  name={ceb.name}
                  popularity={ceb.popularity}
                  key={ceb.id}
                  deleteMe={() => this.deleteContact(ceb.id)}
                >
                </Celebrity>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
