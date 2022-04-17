import { useEffect } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "./../hooks/useActions";

export const TodoList: React.FC = () => {
  const { error, loading, todos, page, limit } = useTypeSelector(
    (state) => state.todos
  );
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((item) => (
          <div
            key={item}
            style={{
              border: item === page ? "1px solid red" : "1px solid black",
              padding: "10px",
            }}
            onClick={() => {
              setTodoPage(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
