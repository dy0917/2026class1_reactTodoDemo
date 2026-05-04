import TodoCard from "./TodoCard";
import { Row } from "react-bootstrap";

export default function TodoList({ todoList, removeTodo }) {
  return (
    <Row>
      {todoList.map((todo) => (
        <TodoCard {...todo} key={todo.id} removeTodo={removeTodo} />
      ))}
    </Row>
  );
}
