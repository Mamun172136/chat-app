import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { logout, loading } = useLogout();
  console.log(loading);
  return (
    <div className="mt-auto ">
      {!loading ? (
        <BiLogOut className="h-6 w-6  cursor-pointer" onClick={logout} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
