import { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

// fetch("http://jsonplaceholder.typicode.com")
//   .then((response) => response.json())
//   .then((data) => {
//     // find max id, if list is empty return 0
//     console.log(data);
//   });

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoClick = (todo) => {
    const cloneTodoList = [...todoList];
    const currentMaxId =
      todoList.length === 0
        ? 0
        : Math.max(...cloneTodoList.map((todo) => todo.id));
    cloneTodoList.push({ ...todo, id: currentMaxId + 1 });
    setTodoList(cloneTodoList);
  };

  const removeTodoClick = (id) => {
    const cloneTodoList = [...todoList];
    const todoIndex = cloneTodoList.findIndex((todo) => todo.id === id);
    cloneTodoList.splice(todoIndex, 1);
    setTodoList(cloneTodoList);
  };

  return (
    <>
      <Container>
        <Row className="">
          <Col>
            <TodoForm addTodo={addTodoClick}></TodoForm>
          </Col>
        </Row>
        <TodoList todoList={todoList} removeTodo={removeTodoClick} />
      </Container>
    </>
  );
}

export default App;
