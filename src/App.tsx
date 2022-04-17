import { TodoList } from "./components/TodoList";
import { UserLiset } from "./components/UserList";

function App() {
  return (
    <div>
      <UserLiset />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
