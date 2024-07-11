import { Link } from "react-router-dom";
import { useState, memo } from "react";
import { useAPI } from "../UsersContext";
import '../App.css';

function List() {
  const { users } = useAPI();
  const [currentPage, setCurrentPage] = useState(1);
  const pageLength = 10;
  
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= users.length / pageLength && pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
        {users ? (
            <>
              <ul>
                {users.slice(currentPage * pageLength - pageLength, currentPage * pageLength).map((user) => <li key={user.id.value}><Link to="/details" state={{ user: user }}>{user.name.first} {user.name.last}</Link></li>)}
              </ul>
              <button disabled={currentPage == 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button> <button disabled={currentPage == Math.ceil(users.length / pageLength)} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </>
          )
          : <div>No users found, please reload the page to try again</div>
        }
    </>
  );
}

export default memo(List);
