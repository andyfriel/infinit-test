import { useAPI } from "../UsersContext";

function Summary() {
  const { users } = useAPI();

  return (
    <div>
        There are currently {users.length} users
    </div>
  );
}

export default Summary;
