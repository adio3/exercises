import { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.dispatch({ type: 'toggleCart' });
    }

    getSum() {
        let totalOfCart = 0;
        if (this.props.shoppingCart.length > 0) {
            this.props.shoppingCart.map(element => (totalOfCart += element.price * element.discount * element.quantity));
        }
        return totalOfCart;
    }

    render() {
        this.getSum();
        return (
            <div id="shopping-cart">
                <div id="cart-top">
                    <button id="close-cart" onClick={this.onClose}>
                        x
                    </button>
                    <div id="cart-title">ShoppingCart</div>
                </div>
                <table id="cart-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th id="center-text">Quantity</th>
                            <th>Discount</th>
                            <th>Final Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.shoppingCart.map(element => (
                            <tr>
                                <td>{element.title}</td>
                                <td id="center-text">{element.price}</td>
                                <td id="center-text">{element.quantity}</td>
                                <td id="center-text">{element.discount}</td>
                                <td id="center-text" className="subtotal">
                                    {element.price * element.discount * element.quantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td id="table-footer">Total Price</td>
                            <td id="table-footer"></td>
                            <td id="table-footer"></td>
                            <td id="table-footer"></td>
                            <td id="center-text" id="table-footer">
                                {this.getSum()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { shirts: state.shirts, shoppingCart: state.shoppingCart };
};
export default connect(mapStateToProps)(ShoppingCart);
