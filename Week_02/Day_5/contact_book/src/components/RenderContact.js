import React, { Component } from 'react';
import './RenderContact.scss';
import Details from './Details';

class RenderContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.contact.id,
            firstName: this.props.contact.firstName,
            lastName: this.props.contact.lastName,
            adress: this.props.contact.adress,
            phoneNumber: this.props.contact.phoneNumber,
            avatar: this.props.contact.avatar,
            onEdit: false,
            shown: false,
        };
        // this.onInputChange = this.onInputChange.bind(this);
    }

    onChangeHandler = event => {
        const fieldName = event.target.attributes.field.textContent;
        const { name, value } = event.target;
        this.setState({ [fieldName]: value });
    };

    onEdit = event => {
        this.props.contact.onEdit = true;
        console.log(this.props.contact, 'is true');
        this.setState({});
    };
    onDelete = event => {
        event.preventDefault();
        this.props.onDelete(this.props.contact.id);
    };
    onSaveChanges = event => {
        event.preventDefault();
        this.props.onSave(this.state);
    };
    onNewAvatar = event => {
        this.setState({
            avatar: URL.createObjectURL(event.target.files[0]),
        });
    };

    onExtend = id => {
        this.props.onExtend(id);
    };

    render() {
        if (this.props.contact.onEdit === false) {
            return (
                <div id={this.props.contact.id}>
                    <img className="contactImg" src={this.props.contact.avatar} />
                    <span>{this.props.contact.firstName + ' ' + this.props.contact.lastName}</span>
                    <button className="addButton" id={this.props.contact.id} onClick={this.onExtend.bind(this.props.contact.id)}></button>
                    <Details shown={this.props.contact.shown} contact={this.props.contact} onNewAvatar={this.onNewAvatar} onEdit={this.onEdit} onDelete={this.onDelete} />
                    {/* <div>
                        <div>
                            <p>First Name: {this.props.contact.firstName}</p>
                            <p>Last Name: {this.props.contact.lastName}</p>
                            <p>Adress: {this.props.contact.adress}</p>
                            <p>Phone number: {this.props.contact.phoneNumber}</p>
                        </div>
                        <input type="file" accept="image/png, image/gif, image/jpeg" id="upload" onChange={this.onNewAvatar.bind()} />
                        <button id="editBtn" onClick={this.onEdit.bind()}>
                            Edit
                        </button>
                        <button id="deleteBtn" onClick={this.onDelete.bind()}>
                            Delete
                        </button>
                    </div> */}
                </div>
            );
        } else {
            return (
                <div id={this.props.contact.id}>
                    <img className="contactImg" src={this.props.contact.avatar} />
                    <span>{this.props.contact.firstName + ' ' + this.props.contact.lastName}</span>
                    <div>
                        <span>First Name:</span>
                        <input type="text" value={this.state.firstName} field="firstName" onChange={this.onChangeHandler} />
                        <span>Last Name:</span>
                        <input type="text" value={this.state.lastName} field="lastName" onChange={this.onChangeHandler} />
                        <span>Adress:</span>
                        <input type="text" value={this.state.adress} field="adress" onChange={this.onChangeHandler} />
                        <span>Phone number:</span>
                        <input type="text" value={this.state.phoneNumber} field="phoneNumber" onChange={this.onChangeHandler} />
                    </div>
                    <input type="file" accept="image/png, image/gif, image/jpeg" id="upload" onChange={this.onNewAvatar.bind()} />
                    <button id="editBtn" onClick={this.onEdit.bind()}>
                        Edit
                    </button>
                    <button id="saveChangesBtn" onClick={this.onSaveChanges.bind()}>
                        Save
                    </button>
                    <button id="deleteBtn" onClick={this.onDelete.bind()}>
                        Delete
                    </button>
                </div>
            );
        }
    }
}

export default RenderContact;
