import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table,Button } from "reactstrap";
import alertify from "alertifyjs"

 class CartDetail extends Component {
     removeFromCart(product){
      this.props.actions.removeFromCart(product);  
      alertify.error(product.productName+ " Deleted From Cart")
   
     }
    render() {
        return (
            <div>
                <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch ){
    return{
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);
