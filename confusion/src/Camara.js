import React, { Component } from 'react';
import './Camara.css';


const mawatta = (<h1>J'aime beaucoup, ma très chère mère maman <strong>Mawatta Camara</strong></h1>);
const chaine = "J'aime aussi mon papa";
const papa = <h2>{chaine}</h2>;
const Mmm = ()=><h4>Bonjour tout le monde</h4>

const element = React.createElement(
    'h1',
    {className: 'greeting', id:'cam', color:'blue'},
    'Hello, world!'
  );


class Camara extends Component {
    render() {
        return (
            <div className="laby">
                {mawatta}<br/>
                {papa}
                <Mmm />
                {element}
            </div>
        );
    }
}

export default Camara;