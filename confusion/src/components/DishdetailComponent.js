import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import Moment from 'moment';


class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        return (
            comments.map((obj, i) => {
                return (
                    <li key={i}>
                        <p>{obj.comment}</p>
                        <p>-- {obj.author},  { Moment(obj.date).format('MMM d, YYYY') }</p>
                    </li>
                    )
            })
        )
    }

    render() {
       if(this.props.dish != null) {
        return (
            <div className="row">
                <Card className="col-12 col-md-5 m-1">
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                </Card>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled" >
                        {this.renderComments(this.props.dish.comments)}
                    </ul>
                </div>
            </div>
        );
       }
       else {
           return (
               <div></div>
           );
       }
    }

}

export default DishDetail;