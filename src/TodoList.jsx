import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteData, updateData }) => {
    return (
        <div>
            {todos.map((item) => (
                <TodoItem
                    key={item.id}
                    item={item}
                    deleteData={deleteData}
                    updateData={updateData}
                    todos={todos}
                />
            ))}
        </div>
    );
};

export default TodoList;