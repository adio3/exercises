import './ContactBook.scss';
import React, { Component } from 'react';
import AddContact from './AddContact';
import RenderContact from './RenderContact';
import userIcon from '../images/user_icon.png';

class ContactBook extends Component {
    state = {
        contacts: [
            {
                id: 1,
                firstName: 'Nenad',
                lastName: 'Haefeli',
                adress: 'Geisshof 105, 8918 Unterlunkhofen',
                phoneNumber: '076 331 20 30',
                avatar: userIcon,
                onEdit: false,
                shown: false,
            },
        ],
    };

    onSubmitHandler = contacts => {
        this.state.contacts.push({
            id: this.state.contacts.length + 1,
            firstName: contacts.firstName,
            lastName: contacts.lastName,
            adress: contacts.adress,
            phoneNumber: contacts.phoneNumber,
            avatar: contacts.avatar,
            onEdit: false,
            shown: false,
        });
        console.log(this.state.contacts);
        this.setState({});
    };

    onDelete = eventId => {
        this.state.contacts.splice(eventId - 1, 1);
        this.setState({});
    };

    onSave = changedContact => {
        function isId(contact) {
            return contact.id === changedContact['id'];
        }
        const contactIndex = this.state.contacts.findIndex(isId);
        this.state.contacts[contactIndex].firstName = changedContact.firstName;
        this.state.contacts[contactIndex].lastName = changedContact.lastName;
        this.state.contacts[contactIndex].adress = changedContact.adress;
        this.state.contacts[contactIndex].phoneNumber = changedContact.phoneNumber;
        this.state.contacts[contactIndex].avatar = changedContact.avatar;
        this.state.contacts[contactIndex].onEdit = false;
        this.setState({});
    };

    onNewAvatar = (eventId, link) => {
        console.log(this.state.contacts.find(eventId));
    };

    onExtend = changedContact => {
        function isId(contact) {
            return contact.id === parseInt(changedContact.target.id);
        }
        const contactIndex = this.state.contacts.findIndex(isId);
        this.state.contacts[contactIndex].shown = !this.state.contacts[contactIndex].shown;
        this.setState({});
    };

    render() {
        return (
            <>
                <AddContact onSubmitHandler={this.onSubmitHandler} />
                {this.state.contacts.map(contact => (
                    <RenderContact contact={contact} onEdit={this.onEdit} onDelete={this.onDelete} onNewAvatar={this.onNewAvatar} onSave={this.onSave} onExtend={this.onExtend} />
                ))}
            </>
        );
    }
}

export default ContactBook;
