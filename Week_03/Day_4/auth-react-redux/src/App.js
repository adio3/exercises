import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: null,
            firstName: '',
        };
    }
    handleEmail = event => {
        console.log('in handleEmail');
        this.setState({ email: event.target.value });
    };

    handlePassword = event => {
        console.log('in handleEmail');
        this.setState({ password: event.target.value });
    };

    login = () => {
        const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/';
        const method = 'POST';
        const body = {
          email: this.state.email,
          password: this.state.password
        };
        const headers = new window.Headers({
          'Content-Type': 'application/json'
        })
        const config = {
          method: method,
          headers: headers
        }
        fetch(url, config)
        .then((res) => res.json)
        .then((data)=>{
          console.log('in 2. then')
          this.setState({
            email: '',
            password: '',
            token: data.access,
          })
        })
        .catch((error)=>{
          console.log('in catch')
          console.log(error)
        })
    };

    getUserInfo = async()=>{
      console.log(
      )
      const url = 'https://motion.propulsion-home.ch/backend/api/users/me/'
      const headers = new Headers({
        'Authorization': `Bearer ${this.state.token}`
      })
      const config = {
        headers, // = headers: headers
      }
      const response = await response.json()
      console.log(data)
      this.setState({
        firstName: data.firstName,
      })
    }

    render() {
        reeturn(
            <div>
                <input type="text" value={this.state.email} onChange={this.handleEmail} placeholder="Email" />
                <input type="password" value={this.state.password} onChange={this.handlePassword} placeholder="Password" />
                <button onClick={this.login}>Login</button>
                <button onClick={this.getUserInfo}>Get User Info</button>
            </div>
        );
    }
}

export default App;
