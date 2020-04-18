import React, { Component } from 'react';

class Celebrity extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt="contact" />
        </td>
        <td>
          {this.props.name}
        </td>
        <td>
          {this.props.popularity}
        </td>
        <td>
          <button onClick={() => this.props.deleteMe()}>Delete</button>
        </td>
      </tr>
    )
  }
}

export default Celebrity;
