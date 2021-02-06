import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Product extends Component {
    // state = { 
    //     name: this.props.product.name,
    //     count: this.props.product.count,
    //     imageurl: "logo192.png",
    //     names:["ahmed","osama","Ali"]
    //  };

    //-----Phases-----       priority
    //--mounting Phase--  
    //1-constructor           0
    //2-render                1   take care of children priority with same priority for each component
    //3-componentDidMount     2.5
    //Updating Phase
    //1-render                1.5
    //2-componentDidUpdate    3
    //unmounting Phase
    //1-componentWillUnmount   2
    constructor(){
        super();
        console.log('Product ==> Constructor');
    }
    componentDidMount(){
        console.log('Product ==> componentDidMount');
    }
    componentWillUnmount(){
        //call ajax call to delete or take action on element
        //invalidating timers canceling network requests
        console.log('Product ==> componentWillUnmount');
    }
    render() {
        console.log('Product ==> Render');

        const styles = {color: "white"}; 
        return (<div className='row'>
            <div className="col-1">
                <span className = {"m-1  btn-sm btn btn-dark"} style={styles} >
                    <Link className="badge text-white" to={`/product/${this.props.product.id}`}>
                        {this.props.product.name} 
                    </Link>
                </span>
            </div>
            <div className="col">
                {/* <img src={this.state.imageurl} alt=""/> */}
                <span style={{cursor: 'pointer'}} className = {"m-1 ml-5 btn-sm btn btn-".concat(this.props.product.count > 0?"primary":"warning") }>{this.props.product.count}</span>
                <span className = {"m-1 btn-sm btn btn-success"} onClick={()=> this.props.onIncrement(this.props.product)} >+</span>
                <span className = {"m-1 btn-sm btn btn-danger"} onClick={()=> this.props.onDecrement(this.props.product)} >-</span>
                <span onClick={() => this.props.onDelete(this.props.product)}><i className="m-1 fas fa-trash btn btn-secondary" /></span>
            </div>
        {/* {this.state.names.map(name => <li key={name}>{name}</li>)} */}
                </div> 
        );
    }
    
}
 
export default Product;