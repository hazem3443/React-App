import React, { Component } from 'react';
import axios from 'axios';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';


class AddProduct extends Component {   

    constructor(props){
        super(props);
        
        this.state = {
            fields: {
                "name":'',
                "price":''
            },
            errors: {}
        }
    }
     async componentDidMount(){
        const id = this.props.match.params.id;
        // console.log(id);
        if(id !== undefined){
            const {data} = await axios.get('http://localhost:4000/products/'+id);
            console.log(data.name);
            const state = {...this.state};

            state.name = data.name;
            state.price = data.price;

            this.setState({fields: state});
        }
    }
    handleChange(field, e){
        let fields = {...this.state.fields};
        fields[field] = e.currentTarget.value;        
        this.setState({fields});
    }
    
    handleValidation(){
        let fields = {...this.state.fields};
        let errors = {};
        let formIsValid = true;
        
        const res = Joi.validate({
            product_name: fields["name"], 
            price:fields["price"]
        },
        {
            product_name : Joi.string().trim().min(3).max(30).required(),
            price : Joi.number().min(0).required()
        },{abortEarly: false});
        
        // console.log(res);

        if(res.error === null);
        else{
            formIsValid = false;
            for (const error of res.error.details){
                errors[error.path] = error.message;
            }
        }
        this.setState({errors});
        return formIsValid;
    }

    async contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
            if(this.props.match.params.id === undefined ){
                // alert("Form submitted");
                const obj= {name :this.state.fields.name ,price: parseInt(this.state.fields.price,10), count:0, isInCart: false};
                // console.log(obj);
                await axios.post('http://localhost:4000/products', obj);
                toast.success("product added");
                // this.props.onAdd(obj)
                // Redirect('/shopingcart');
            }else{
                const id = this.props.match.params.id;
                const obj= {name :this.state.fields.name ,price: parseInt(this.state.fields.price,10), count:0, isInCart: false};
                
                // console.log(obj);
                await axios.patch('http://localhost:4000/products/'+id, obj);

                toast.info("product updated");
            }
            this.props.updateData();
            this.props.history.replace("/admin");
        }else{
        //    alert("Form has errors.")
        }
    }
    render() { 
        return ( 
        <React.Fragment>    
            <h1>{this.props.match.params.id !== undefined ? "Edit Product":"New Product"}</h1>   
           <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                  
                       <label htmlFor="Product">Product Name</label>
                       <input 
                            name="name"
                            value={this.state.fields["name"]}
                            onChange={this.handleChange.bind(this, "name")} 
                            ref="name" 
                            id="name"
                            type="text" 
                            className="form-control"  
                            size="30" 
                            placeholder="Product name" 
                        />
                       <small className="form-text text-danger" >{this.state.errors["name"]}</small>
                    <br/>

                       <label htmlFor="Price">Price</label>
                       <input 
                            name = "price"
                            value={this.state.fields["price"]}
                            onChange={this.handleChange.bind(this, "price")} 
                            refs="price" 
                            id="price"
                            type="text" 
                            className="form-control"  
                            size="30" 
                            placeholder="Price in L.E" 
                        />
                       <small className="form-text text-danger">{this.state.errors["price"]}</small>
                    <br/>
                    <button type="submit" className="btn btn-primary">{this.props.match.params.id !== undefined ? "Edit":"Add"}</button>
            </form>
        </React.Fragment>
        );
    }
}
 
export default AddProduct;