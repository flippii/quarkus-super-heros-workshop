import * as React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

export interface IError {
  title: string;
  description: string;
  image?: string;
  error?: string;
  onClick?: () => void;
}

export class Error extends React.Component<IError> {

  render() {
    const { title, image, description, error, onClick } = this.props;

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle><h5>{title}</h5></CardTitle>
          </CardBody>
          <img src={image} alt="" />
          <CardBody>
            <CardText>{description}</CardText>
            {error ? (
              <>
                <CardText>{error}</CardText>
              </>
            ) : null}
            {onClick ? (
              <>
                <Button color="primary" onClick={onClick}>Button</Button>
              </>
            ) : null}
          </CardBody>
        </Card>
      </div>
    );
  }

}
