import 'bootstrap/dist/css/bootstrap.min.css';
import "@babel/polyfill";
import "core-js/modules/es6.promise";
import "core-js/modules/es7.array.includes";
import React, {Component} from 'react';
import ReactDOM from "react-dom";

class App extends Component {
     render(){
       return (
             <div>
                 <p>Wema ALart Project! bootstrap</p>
                 <p>If you see 'this' page it means its working!</p>
             </div>
       );
     }
}

ReactDOM.render(<App />,
        document.getElementById('root'));
