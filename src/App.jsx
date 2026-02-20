import { useState } from 'react'
import TodoEdit from './TodoEdit';
import TodoList from './TodoList';
import { dummyData } from './dummyData';

function App() {
  const [dummys, setDummys] = useState(dummyData);

  return (
    <>
      <h2>TODOリスト</h2>
      <TodoEdit dummys={dummys} setDummys={setDummys} />
      <TodoList dummys={dummys} setDummys={setDummys} />
    </>
  );
}
export default App