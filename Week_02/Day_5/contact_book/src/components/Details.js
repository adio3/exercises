import React, { Component } from 'react';
import './Details.scss';

class Details extends Component {
    render() {
        if (this.props.shown) {
            return (
                <div>
                    <div>
                        <p>First Name: {this.props.contact.firstName}</p>
                        <p>Last Name: {this.props.contact.lastName}</p>
                        <p>Adress: {this.props.contact.adress}</p>
                        <p>Phone number: {this.props.contact.phoneNumber}</p>
                    </div>
                    <input type="file" accept="image/png, image/gif, image/jpeg" id="upload" onChange={this.props.onNewAvatar} />
                    <button id="editBtn" onClick={this.props.onEdit}>
                        Edit
                    </button>
                    <button id="deleteBtn" onClick={this.props.onDelete}>
                        Delete
                    </button>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Details;
