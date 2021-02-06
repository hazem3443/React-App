import React, { Component } from 'react';
// import reactDom from 'react-dom';
import Product from './product';

class ShopingCart extends Component {
    constructor(props){
        //you need to pass props to super class to enable React to understand current methods
        super(props);
        //initialize local data or State 
        console.log('ShopingCart ==> Constructor');
    }
    componentDidMount(){
        //call backend server Api
        console.log('ShopingCart ==> ComponentDidMount');
    }
    componentDidUpdate(prevprops,prevstate){
        console.log('ShopingCart ==> ComponentDidUpdate');
        //a good place to do network request as long as you compare the current props to previous props
        // console.log(prevprops);
    }
    render() {
        console.log('ShopingCart ==> Render');

        const {products, onIncrement, onDecrement, onDelete}= this.props;
        return ( 
            <React.Fragment>
                <h1>Shoping Cart</h1>
                <button className="btn btn-secondary" onClick={this.props.onReset}>Reset</button>
                {products.map(product =>
                <Product
                    key={product.id} 
                    product={product}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                />
                )}
        </React.Fragment>
        );
    }
}
 
export default ShopingCart;