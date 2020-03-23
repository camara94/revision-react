import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DishDetail from './DishdetailComponent';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
           selectedDish: null
        }

        console.log("methode constructor is invoked !!!");
    }

    onDishSelect(dish) {
        this.setState( {
            selectedDish: dish
        } );
    }

    componentDidMount() {
        console.log("methode componentDidMount is invoked !!!");
    }

    componentDidUpdate(){
        console.log("methode componentDidUpdate is invoked !!!");
    }

    render() {

        const menu = this.props.dishes.map( (dish) => {
            return (
                <Card  key={dish.id} className="col-12 col-md-5 m-1" onClick={ ()=>{this.onDishSelect(dish)} } >
                    <CardImg width="100%"  src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle> {dish.name} </CardTitle>
                    </CardImgOverlay>
                </Card>
            );
        } );

        console.log("methode render is invoked !!!");

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={ this.state.selectedDish } />
            </div>
        );
    }

}

export default Menu;