import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/Directory";

const HomePage = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default HomePage;
