import { useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";

function Logout() {
  const navigate = useNavigate();

  const refreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/");
    refreshPage();
  }, [navigate, refreshPage]);
  return <div></div>;
}

export default Logout;
