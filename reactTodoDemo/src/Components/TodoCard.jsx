import { Col, Card, Button } from "react-bootstrap";

export default function TodoCard({ id, title, description }) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
