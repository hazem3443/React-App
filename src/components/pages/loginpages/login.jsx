import React, { Component } from 'react';
import Joi from 'joi-browser';

class Login extends Component {
    state = { 
        username:'',
        password:'',
        errors: {}
     }

    // username = React.createRef();

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    }

    validate =()=>{
        const errors = {};
        const state = {...this.state};
        delete state.errors;
        const res = Joi.validate(state, this.schema, {abortEarly: false});
        // console.log(res);

        if(res.error === null) {
            this.setState({errors : {}});
            return null;
        }else{
            if(res.error.details === null);
            else{
                for (const error of res.error.details){
                    errors[error.path] = error.message;
                }    
            }
        }

        //setState
        this.setState({errors});

        // if(this.state.username.trim() === '')
        //     errors.username = "Username is required";
        
        // if(this.state.password.trim() === '')
        //     errors.password = "Psername is required";

        // //Set state
        // this.setState({errors});

        // return Object.keys(errors).length === 0? null : errors;
    };
    handleSubmit = e =>{
        e.preventDefault();

        const errors = this.validate();

        if(errors) return;


        //call Backend server
        console.log("Submit");
    }

    handleChange = e =>{
        //clone
        let state = {...this.state};
        //edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //setstate
        this.setState(state);
    }
    render() { 
        return ( 
        <React.Fragment>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input 
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
                ref={this.username} 
                id="username" 
                type="text" 
                className="form-control" 
                aria-describedby="emailHelp" />
                {this.state.errors.username && (<div className="alert alert-danger">{this.state.errors.username}</div>)}
                
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

              </div>

              <div className="form-group">
                <label value={this.state.password} htmlFor="password">Password</label>
                <input 
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                id="password" type="password" className="form-control" />

                {this.state.errors.password && (<div className="alert alert-danger">{this.state.errors.password}</div>)}
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </React.Fragment>
        );
    }
}
 
export default Login;