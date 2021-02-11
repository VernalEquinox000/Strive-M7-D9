import React from "react";
import { Col, Card, Button } from "react-bootstrap";

interface Props {
  id: string;
  title: string;
  preview: string;
  picture: string;
}

/*  playPreview=  (e) => {
    e.preventDefault();
    this.props.preview
  };  */

const Song = ({ id, title, preview, picture }: Props) => {
  return (
    <div>
      <Col xs={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={picture} />
          <Card.Body id={id}>
            <Card.Title>{title}</Card.Title>
            <Button variant="primary">preview</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Song;
