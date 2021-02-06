import React, { Component } from 'react';
import { Route, Switch, Redirect} from "react-router-dom";
import ReactWebMediaPlayer from 'react-web-media-player';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import NavBar from './navbar';
import ShopingCart from './shopingCart';
import ProductDetails from './productdetails';

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import PageNotFound from './pages/notfound';
import Login from './pages/loginpages/login';
import AdminPage from './pages/admin';
import AddProduct from './pages/addproduct';

class App extends Component {
    state = { 
        products:[]
        //     {id:1, name:'Burger', count:0},
        //     {id:2, name:'Cola', count:0},
        //     {id:3, name:'Fries', count:0}
         
        // sum:0
     };

     async componentDidMount(){
        //  fetch('https://my-json-server.typicode.com/typicode/demo/posts').then(res => res.json()).then(data => console.log(data));
        const  products =  (await axios.get('http://localhost:4000/products')).data;
         
        //  console.log(products);
        this.setState({products});

         //  console.log(promise);
        // const res = promise;
        // console.log(res.then);
        // res

         //pending===>
         //         resolved
         //         rejected
     }
     handleDelete = async (product)=>{
        //pessimistic 
        //save old data
        const oldProducts = [...this.state.products];

        const products = this.state.products.filter(p => p.id !== product.id);
        this.setState({products});
        try{
            await axios.delete("http://localhost:4000/products/"+product.id);
            toast.warn("Deleted successfully");
        }catch(ex){
            toast.error("can't Delete");
            this.setState({products:oldProducts});
        }
    }
    handleReset=()=>{
        //clone
        let products = [...this.state.products];
        //edit
        products = products.map(p=>{
            p.count = 0;
            return p;
        });
        //setstate
        this.setState({products});
    }

    handleDecrement=(product)=>{
        //clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        //edit
        products[index].count>0?products[index].count--:products[index].count=0 ;
        //setState
        this.setState({products});
        // const products
        // this.setState({count: product.count > 0 ? product.count-1:0});
    }
    handleIncrement=(product)=>{
        //clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        //edit
        products[index].count ++;
        //setState
        this.setState({products});
    }

    handleAddData = async()=>{
        const  products =  (await axios.get('http://localhost:4000/products')).data;
        this.setState({products})
    }
    render() { 
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar productscount = {this.state.products.filter(p=>p.count>0).length}/>
                <main className="container">
                    <Switch>
                        <Route path="/pagenotfound" component={PageNotFound} />
                        <Route path="/product/:id?/:name?" render={(props)=><ProductDetails products={this.state.products} {...props}/>} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/admin" render={(props)=> (
                            <AdminPage
                                products={this.state.products}
                                onDelete = {this.handleDelete}
                            />
                            )} 
                        />
                        <Route path="/add_product" render ={(props)=> <AddProduct {...props} updateData = {this.handleAddData}/>} />
                        <Route path="/update_product/:id?" render ={(props)=> <AddProduct {...props} updateData = {this.handleAddData}/>} />

                        <Route path="/home" exact component={Home} />
                        <Route path="/App1" render={(props)=> (
                                <ShopingCart
                                    products={this.state.products}
                                    onIncrement = {this.handleIncrement}
                                    onDecrement = {this.handleDecrement}
                                    onDelete = {this.handleDelete}
                                    onReset = {this.handleReset}
                                    {...props}
                                />
                        )}/>
                        <Route path="/Media1">
                            <ReactWebMediaPlayer
                                title="hazem player"
                                video="https://www.youtube.com/watch?v=JQgzoSTTQ10" 
                                thumbnail="https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg"
                                // autoplay={true}
                                height={560}
                                volume={0.5}
                                width={560}
                                color='#91ffff'
                                logo={{ img: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg', href:'/'}}

                            />
                        </Route>
                        
                        <Route path="/login" component={Login} />

                        <Redirect from='/' to='/home' />
                        <Redirect to='/pagenotfound'/>
                    </Switch>
                    {/* <ShopingCart
                    products={this.state.products}
                    onIncrement = {this.handleIncrement}
                    onDecrement = {this.handleDecrement}
                    onDelete = {this.handleDelete}
                    onReset = {this.handleReset}
                     /> */}
                </main>
            </React.Fragment>
         );
    }
}
 
export default App;