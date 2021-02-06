import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class AdminPage extends Component {
   componentDidMount(){
      //   const products = await (await axios.get("http://localhost:4000/products")).data;
      //   console.log(products);
   }
   
   async componentDidUpdate(prevprops,prevstate){
      //  fetch('https://my-json-server.typicode.com/typicode/demo/posts').then(res => res.json()).then(data => console.log(data));
      //   this.setState({products});
      
      if (prevstate !== this.state) {
         // console.log('pokemons state has changed.');
         // this.props.updateData();
      }
    }
     render() { 
         return (
             <React.Fragment>
                 <Link to="/add_product">
                   <button className="btn btn-primary mt-2 mb-2" renderas="button">
                     <span>Add new Product</span>
                   </button>
                 </Link>

                 <table className="table">
                 <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">name</th>
                      <th scope="col">price</th>
                      <th scope="col"></th>
                      <th scope="col"></th>

                    </tr>
                 </thead>
                 <tbody>
                    {this.renderTableData()}
                 </tbody>
                </table>
             </React.Fragment>
          );
     }

     renderTableData() {
         
        return this.props.products.map((product, index) => {
           const { id, name, price } = product //destructuring
           
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{price}</td>
                 <td >
                     <Link to={"/update_product/"+id}>
                       <i className="btn btn-md w-1 m-0 ml-0 mr-0 fas fa-edit"></i>
                     </Link>
                 </td>
                 <td ><i 
                 onClick = {()=>this.props.onDelete(product)}
                 className="btn btn-md w-1 m-0 ml-0 mr-0 far fa-trash-alt"></i></td>

              </tr>
           )
        })
     }
 }
  
 export default AdminPage;