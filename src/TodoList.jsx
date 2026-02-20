import TodoItem from "./TodoItem";

const TodoList = ({ dummys, setDummys }) => {
    return (
        <div>
            {dummys.map((item) => (
                <TodoItem
                    key={item.id}
                    item={item}
                    dummys={dummys}
                    setDummys={setDummys}
                />
            ))}
        </div>
    );
};

export default TodoList;