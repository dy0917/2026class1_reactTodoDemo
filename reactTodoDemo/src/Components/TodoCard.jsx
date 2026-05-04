import { Col, Card, Button } from "react-bootstrap";

export default function TodoCard({ id, title, description, removeTodo }) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="danger"
            onClick={() => {
              removeTodo(id);
            }}
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
