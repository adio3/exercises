import { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import ShoppingCart from './components/shoppingcart';
import Login from './components/login';
// import { Link, Route } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addToCart = this.addToCart.bind(this);
        this.node = null;
    }

    addToCart(event) {
        const action = {
            type: 'addCart',
            id: event.target.id,
        };
        this.props.dispatch(action);
        this.setState({});
    }

    toggleShowCart() {
        this.props.dispatch({ type: 'toggleCart' });
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }
    componentDidUnmount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    handleClick = e => {
        if (this.node.contains(e.target)) {
            return;
        }
        if (this.props.showCart) {
            this.props.dispatch({ type: 'toggleCart' });
        }
    };

    render() {
        // const showShoppingCart = this.props.showCart;
        return (
            <>
                <header className="App-header">Shopping-Cart</header>
                <Login />
                <div>
                    <button to="/shoppingcart" id="cart-button" onClick={() => this.toggleShowCart()}>
                        {this.props.shoppingCart.length}
                    </button>
                    <div ref={node => (this.node = node)} className="shopping-items">
                        {this.props.shirts.map(element => {
                            return (
                                <figure>
                                    <img src={element.url} />
                                    <p>{element.title}</p>
                                    <p>{element.price}</p>
                                    <button id={element.id} onClick={this.addToCart}>
                                        Add to cart
                                    </button>
                                </figure>
                            );
                        })}
                    </div>
                </div>
                <div ref={node => (this.node = node)}>{this.props.showCart ? <ShoppingCart /> : null}</div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { shirts: state.shirts, shoppingCart: state.shoppingCart, showCart: state.showCart };
};

export default connect(mapStateToProps)(Home);
