import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const todoSubmitClick = (e) => {
    e.preventDefault();
    const todo = { title, description: desc };
    addTodo(todo);
  };
  return (
    <Form onSubmit={todoSubmitClick}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextTitle">
        <Form.Label column sm="2">
          Title
        </Form.Label>
        <Col sm="10">
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formPlaintextDescription"
      >
        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col sm="10">
          <Form.Control
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm="10">
          <Button type="submit">Save</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
