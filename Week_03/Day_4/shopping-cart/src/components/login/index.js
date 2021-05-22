import { Component } from 'react';
import { connect } from 'react-redux';
import { UserLogin } from '../../actions/login_user';

class Index extends Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onLogoutHandler = this.onLogoutHandler.bind(this);

        this.state = { email: '', password: '', token: '', username: '' };
    }

    onChangeHandler(event) {
        const targetType = event.target.id;
        const targetValue = event.target.value;
        this.setState({ [targetType]: targetValue });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        UserLogin(this.state.email, this.state.password).then((result, status) => {
            console.log(result.user.username);
            this.props.dispatch({
                type: 'updateLogin',
                login: {
                    email: '',
                    password: '',
                    username: result.user.username,
                },
            });
            localStorage.setItem('token', result.access);
            this.setState({ email: '', password: '', token: '', username: '' });
        });
    }

    onLogoutHandler(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        this.setState({});
    }

    render() {
        return (
            <>
                <>
                    {localStorage.token ? (
                        <>
                            <div>{this.props.login.username}</div>
                            <button onClick={this.onLogoutHandler}>Logout</button>
                        </>
                    ) : (
                        <form onSubmit={this.onSubmitHandler}>
                            <input id="email" type="text" placeholder="email" onChange={this.onChangeHandler} />
                            <input id="password" type="password" placeholder="password" onChange={this.onChangeHandler} />
                            <submit>
                                <button>Login</button>
                            </submit>
                        </form>
                    )}
                </>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { shirts: state.shirts, shoppingCart: state.shoppingCart, login: state.login };
};

export default connect(mapStateToProps)(Index);
