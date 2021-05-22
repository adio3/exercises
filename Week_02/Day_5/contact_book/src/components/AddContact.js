import React, { Component } from 'react';
import './AddContact.scss';
import './addButton';
import userIcon from '../images/user_icon.png';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            adress: '',
            phoneNumber: '',
            avatar: userIcon,
            onEdit: false,
            shown: false,
            adding: false,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onChangeHandler = event => {
        const fieldName = event.target.attributes.field.textContent;
        const { name, value } = event.target;
        this.setState({ [fieldName]: value });
    };

    onInputChange(event) {
        this.setState({
            avatar: URL.createObjectURL(event.target.files[0]),
        });
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmitHandler(this.state);
    };

    adding = () => {
        this.setState({ adding: !this.state.adding });
    };

    render() {
        if (this.state.adding) {
            return (
                <div className="addContact">
                    <button type="button" onClick={this.adding.bind()}>
                        +
                    </button>
                    <div className="inputFields">
                        <input type="text" placeholder="First name:" field="firstName" onChange={this.onChangeHandler} value={this.state.firstName} />
                        <input type="text" placeholder="Last name:" field="lastName" onChange={this.onChangeHandler} value={this.state.lastName} />
                        <input type="text" placeholder="Adress:" field="adress" onChange={this.onChangeHandler} value={this.state.adress} />
                        <input type="text" placeholder="Phone number:" field="phoneNumber" onChange={this.onChangeHandler} value={this.state.phoneNumber} />
                        <input type="file" accept="image/png, image/gif, image/jpeg" id="upload" onChange={this.onInputChange} />

                        <button type="button" onClick={this.onSubmit.bind()}>
                            save
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <button type="button" onClick={this.adding.bind()}>
                    +
                </button>
            );
        }
    }
}

export default AddContact;
