import { useEffect, useState } from 'react'
import TodoEdit from './TodoEdit';
import TodoList from './TodoList';
import { dummyData } from './dummyData';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from './data';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  const addData = async (todoText) => {
    await addTodo(todoText);
    await getData();
  };

  const deleteData = async (id) => {
    await deleteTodo(id);
    await getData();
  };

  const updateData = async (data) => {
    await updateTodo(data);
    await getData();
  };

  return (
    <>
      <h2>TODOリスト</h2>
      <TodoEdit addData={addData} />
      <TodoList todos={todos} deleteData={deleteData} updateData={updateData} />
    </>
  );
}
export default App