import React, { Component } from 'react';
import qs from 'query-string';

class ProductDetails extends Component {
    state = {  }
    handleSave = () =>{
        //backend save data
        //redirect to shoping cart
        this.props.history.replace('/app1');
    };
    render() { 
        const res = qs.parse(this.props.location.search);
        console.log(res);
    
        const product = this.props.products.filter(c =>c.id ===parseInt(this.props.match.params.id))[0];
        if(product){
            return (
                <React.Fragment>
                    <h1>Details No. {this.props.match.params.id}</h1>
                    <h2>{product.name}</h2>
                    <h2>Count in Shoping Cart: {product.count}</h2>
    
                    <button onClick={this.handleSave} className="btm-primary btn-sm">save</button>
                </React.Fragment>
    
            );
        }else{
            return(<h1>Product Not Found</h1>);
        }
    }
}
 
export default ProductDetails;
