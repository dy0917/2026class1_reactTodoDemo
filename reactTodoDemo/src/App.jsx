import { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import TodoForm from "./Components/TodoForm";
import TodoCard from "./Components/TodoCard";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addToClick = (todo) => {
    const cloneTodoList = [...todoList];
    // find max id, if list is empty return 0
    const currentMaxId =
      todoList.length === 0
        ? 0
        : Math.max(...cloneTodoList.map((todo) => todo.id));
    cloneTodoList.push({ ...todo, id: currentMaxId + 1 });
    setTodoList(cloneTodoList);
  };

  return (
    <>
      <Container>
        <Row className="">
          <Col>
            <TodoForm addTodo={addToClick}></TodoForm>
          </Col>
        </Row>
        <Row>
          {todoList.map((todo) => (
            <TodoCard {...todo} key={todo.id} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
