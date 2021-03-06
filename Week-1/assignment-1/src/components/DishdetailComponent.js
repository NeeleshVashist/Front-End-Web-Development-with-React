import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formateDate({ date }) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <div>
                <h4>{dish.name}</h4>
              </div>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments != null) {
      let list = comments.map((comments) => {
        let date = comments.date;

        return (
          <li key={comments.id}>
            <div>
              <p>{comments.comment} </p>
              <p>
                {comments.author}, {this.formateDate({ date })}
              </p>
            </div>
          </li>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{list}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const { dishSelect } = this.props;

    return dishSelect ? (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(dishSelect)}</div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(dishSelect.comments)}
        </div>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default Dishdetail;
