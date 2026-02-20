import { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoEdit = ({ addData }) => {
    const [text, setText] = useState("");

    const handleAdd = async (text) => {
        if (!text) return;
        await addData(text);
        setText("");
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="内容を入力"
            />
            <button className={styles.buttonConfirm} onClick={() => handleAdd(text)}>+ 新規追加</button>
        </div>
    );
};

export default TodoEdit;