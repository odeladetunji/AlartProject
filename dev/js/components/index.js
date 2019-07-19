import React, {Component} from 'react';
import { Col, Row, Grid, xs, sm, md } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import StashCashOut from './stashCashOut';

class App extends Component {
      render(){
        return(
            <div>
               <Header />
               <StashCashOut />
               <Footer />
            </div>
        );
      }
}

export default App;
