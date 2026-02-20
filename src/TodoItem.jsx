import { useState } from "react";

const TodoItem = ({ item, deleteData, updateData, todos }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item.content);

    const handleCheckboxChange = async (item) => {
        const todo = { ...item, checked: !item.checked };
        await updateData(todo);
    };

    const handleDelete = async (item) => {
        await deleteData(item.id);
    };

    const handleEdit = async (editText) => {
        const todo = { ...item, content: editText };
        await updateData(todo);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setEditText("");
        setIsEditing(false);
    }

    return (
        <>
            <hr />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item)}
                />
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />
                        <button onClick={() => handleEdit(editText)}>確定</button>
                        <button onClick={() => handleCancel()} >取消</button>
                    </>
                ) : (
                    <>
                        <p>{item.content}</p>
                        <button onClick={() => setIsEditing(true)}>編集</button>
                        <button onClick={() => handleDelete(item)}>削除</button>
                    </>
                )}

            </div>
        </>
    );
};


export default TodoItem;