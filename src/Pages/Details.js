import { useLocation, useNavigate } from "react-router-dom";

function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = state.user;

  return (
    <div>
      <img src={user.picture.large} /><br />
      <strong>Name:</strong> {user.name.first} {user.name.last} <br />
      <strong>Email:</strong> {user.email}<br />
      <strong>Phone:</strong> {user.phone}<br />
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default Details;
