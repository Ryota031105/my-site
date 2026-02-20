export const fetchTodos = async () => {
    const url = "https://klnxoyzpthinihfzvoyr.supabase.co/rest/v1/todos";

    const response = await fetch(url, {
        method: "GET", // ここでGET！
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbnhveXpwdGhpbmloZnp2b3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTEyNDAsImV4cCI6MjA4NzE2NzI0MH0.ZehPXFno4XfqiN_-NG8xSamTrFs9CusZB6TSyfZ9psY",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbnhveXpwdGhpbmloZnp2b3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTEyNDAsImV4cCI6MjA4NzE2NzI0MH0.ZehPXFno4XfqiN_-NG8xSamTrFs9CusZB6TSyfZ9psY`
        }
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return await response.json();
};

export const addTodo = async (content) => {
    const url = "https://klnxoyzpthinihfzvoyr.supabase.co/rest/v1/todos";

    const response = await fetch(url, {
        method: "POST", // ここでGET！
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbnhveXpwdGhpbmloZnp2b3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTEyNDAsImV4cCI6MjA4NzE2NzI0MH0.ZehPXFno4XfqiN_-NG8xSamTrFs9CusZB6TSyfZ9psY",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbnhveXpwdGhpbmloZnp2b3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTEyNDAsImV4cCI6MjA4NzE2NzI0MH0.ZehPXFno4XfqiN_-NG8xSamTrFs9CusZB6TSyfZ9psY`,
            "Content-Type": "application/json",
            "Prefer": "return=representation"
        },

        body: JSON.stringify({
            text: content,
            checked: false
        })
    });


    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    const data = await response.json();
};

export const deleteTodo = async (id) => {
    const url = `https://klnxoyzpthinihfzvoyr.supabase.co/rest/v1/todos?id=eq.${id}`;

    const response = await fetch(url, {
        method: "DELETE", // ここでGET！
        headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbnhveXpwdGhpbmloZnp2b3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTEyNDAsImV4cCI6MjA4NzE2NzI0MH0.ZehPXFno4XfqiN_-NG8xSamTrFs9CusZB6TSyfZ9psY",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbnhveXpwdGhpbmloZnp2b3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTEyNDAsImV4cCI6MjA4NzE2NzI0MH0.ZehPXFno4XfqiN_-NG8xSamTrFs9CusZB6TSyfZ9psY`,
        }
    });


    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
};

// PATCHの処理（指定したIDの完了状態を更新）
export const updateTodo = async (todo) => {
    const url = `https://あなたのURL.supabase.co/rest/v1/todos?id=eq.${id}`;

    const response = await fetch(url, {
        method: "PUT", // 一部更新なのでPATCH！
        headers: {
            "apikey": "あなたのAPIキー",
            "Authorization": `Bearer あなたのAPIキー`,
            "Content-Type": "application/json"
        },
        // 現在の状態（currentStatus）の逆（!）を送信して上書きします
        body: JSON.stringify({
            todo
        })
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return await response.json();
};