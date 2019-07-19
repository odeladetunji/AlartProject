import React, {Component} from 'react';
import { Col, Row, Grid, xs, sm, md } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import Stash from './stash';

class App extends Component {
      render(){
        return(
            <div>
               <Header />
               <Stash />
               <Footer />
            </div>
        );
      }
}

export default App;
