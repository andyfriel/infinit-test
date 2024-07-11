import { Outlet } from "react-router-dom";
import { UsersContextProvider } from './UsersContext';
import { useContext } from "react";

const Layout = () => {
  
  const users = useContext(UsersContextProvider);
  
  return (
    <div className="App">
       <UsersContextProvider value={users}>
          <Outlet />
       </UsersContextProvider>
    </div>
  )
};

export default Layout;
