import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ROUTES from "../../helpers/ROUTES";
import styles from "./Sidebar.module.scss";
import { ReactComponent as DashboardIcon } from "../../assets/images/svg/dashboard-icon.svg";
import { ReactComponent as SenderIcon } from "../../assets/images/svg/personalcard-icon.svg";
import { ReactComponent as BookIcon } from "../../assets/images/svg/book-icon.svg";
import { ReactComponent as MessageIcon } from "../../assets/images/svg/message-edit-icon.svg";
import { ReactComponent as DeliveryIcon } from "../../assets/images/svg/message-tick-icon.svg";
import { ReactComponent as InsightIcon } from "../../assets/images/svg/chart-icon.svg";
import { ReactComponent as HistoryIcon } from "../../assets/images/svg/card-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/images/svg/user-icon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/images/svg/logout-icon.svg";
import { postData } from "../../apis/axiosApiMethods";
import { apiEndpoints } from "../../apis/apiEndpoints";
import { BASE_URL1 } from "../../appConstants";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await postData(apiEndpoints.logOut, "", BASE_URL1);
      localStorage.clear();
      navigate("/login");
      toast.success(res.message);
    } catch (error) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <React.Fragment>
      <ul className={`${styles.listUnstyled} ${styles.components}`}>
        <li>
          <div className={styles.profileLayout}>
            <div className={styles.profileNameBox}>
              <div className={styles.profileNameInnerBox}>
                <div className={styles.profileNameInnerBoxWithContent}>
                  {/* {userDetails
                ? getFirstLetter(
                    capitalizeFirstLetter(
                      userDetails && userDetails.rep_first_name
                    )
                  )
                : "."} */}
                  A
                </div>
              </div>
            </div>
            <span>Uber</span>
          </div>
        </li>
        {/* Dashboard */}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.selected}`
                : `${styles.navLink}`
            }
            to={ROUTES.DASHBOARD}
          >
            <DashboardIcon />
            <span>Overview</span>
          </NavLink>
        </li>
        {/* Sender Ids */}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.selected}`
                : `${styles.navLink}`
            }
            to={ROUTES.SENDERID}
          >
            <SenderIcon />
            <span>Sender IDs</span>
          </NavLink>
        </li>
        {/* Phone-book */}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.selected}`
                : `${styles.navLink}`
            }
            to={ROUTES.PHONEBOOK}
          >
            <BookIcon />
            <span>PhoneBook</span>
          </NavLink>
        </li>
        {/* Compose Message */}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.selected}`
                : `${styles.navLink}`
            }
            to={ROUTES.COMPOSEMESSAGE}
          >
            <MessageIcon />
            <span>Compose Message</span>
          </NavLink>
        </li>
        {/* Delivery Report */}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.selected}`
                : `${styles.navLink}`
            }
            to={ROUTES.DELIVERREPORT}
          >
            <DeliveryIcon />
            <span>Delivery Report</span>
          </NavLink>
        </li>
        {/* Message insights */}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.selected}`
                : `${styles.navLink}`
            }
            to={ROUTES.MESSAGEINSIGHTS}
          >
            <InsightIcon />
            <span>Message-Insights</span>
          </NavLink>
        </li>
        {/* Payment History*/}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.selected}`
                : `${styles.navLink}`
            }
            to={ROUTES.PAYMENTHISTORY}
          >
            <HistoryIcon />
            <span>Payment History</span>
          </NavLink>
        </li>
        <div className={`${styles.sidebarLine} ${styles.fullWidth}`}></div>
        {/* Footer Section */}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.selected}`
                : `${styles.navLink}`
            }
            to={ROUTES.MANAGEUSER}
          >
            <UserIcon />
            <span>Manage User</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.selected}`
                : `${styles.navLink}`
            }
            to={ROUTES.LOGOUT}
            onClick={logout}
          >
            <LogoutIcon />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default Sidebar;
