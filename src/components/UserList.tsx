import { useEffect } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "./../hooks/useActions";

export const UserLiset: React.FC = () => {
  const { error, loading, users } = useTypeSelector((state) => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {users.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
