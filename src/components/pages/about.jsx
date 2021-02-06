import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import Company from './company';
import Team from './team';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1>About page</h1>

                <div className="row">
                    <div className="col-3">
                        <ul>
                            <li>
                                <Link to='/about/team' >our team</Link>
                            </li>
                            <li>
                                <Link to='/about/company' >our company</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <Route path="/about/team" component={Team} />
                        <Route path="/about/company" component={Company} />
                    </div>
                </div>


            </React.Fragment>
        );
    }
}
 
export default About;