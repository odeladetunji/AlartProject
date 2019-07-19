import React, {Component} from 'react';
import { Col, Row, Grid, xs, sm, md } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import Test from './test';

class App extends Component {
      render(){
        return(
            <div>
               <Header />
               <Test />
               <Footer />
            </div>
        );
      }
}

export default App;
