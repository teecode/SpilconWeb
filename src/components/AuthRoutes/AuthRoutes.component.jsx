import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ROUTES from "../../helpers/Routes";
import Registration from "../../pages/Registration";
import AuthLayout from "../AuthLayout/AuthLayout";
// import ROUTES from "../../helpers/ROUTES";
// import Dashboard from "../../pages/Dashboard/Dashboard";
// import DeliveryReport from "../../pages/DeliveryReport/DeliveryReport";
// import GroupSmsReport from "../../pages/DeliveryReport/GroupSmsReport";
// import PhoneBook from "../../pages/PhoneBook/PhoneBook";
// import SenderId from "../../pages/SenderId/SenderId";  S
// import Logout from "../Logout/LogOut";

const AuthRoutes = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, navigate]);

  return (
    <div>
      <main id="content" role="main">
        {/* Content starts here */}
        <div>
          <AuthLayout>
            <Routes>
              <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            </Routes>
          </AuthLayout>
        </div>
      </main>
    </div>
  );
};

export default AuthRoutes;
