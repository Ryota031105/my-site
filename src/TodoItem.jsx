import { useState } from "react";

const TodoItem = ({ item, dummys, setDummys }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState("");

    const handleCheckboxChange = (id) => {
        setDummys(dummys.map((dummy) => {
            if (dummy.id === id) {
                return { ...dummy, status: !dummy.status };
            }
            return dummy;
        }));
    };

    const handleDelete = (targetItem) => {
        setDummys(dummys
            .filter((dummy) => dummy.id !== targetItem.id)
            .map((dummy, index) => ({ ...dummy, id: index + 1 })));
    };

    const handleEdit = (editText) => {
        if (!editText) {
            return;
        }
        setDummys(dummys.map((dummy) => {
            if (dummy.id === item.id) {
                return { ...dummy, content: editText };
            } else {
                return dummy;
            }
        }))
        setEditText("");
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
                        <input
                            type="checkbox"
                            checked={item.status}
                            onChange={() => handleCheckboxChange(item.id)}
                        />
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