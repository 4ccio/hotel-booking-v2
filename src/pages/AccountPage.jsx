import { useEffect } from "react";
import { useSelector } from "react-redux";

const isTokenValid = () => setTimeout(() => true, 2000);

const AccountPage = () => {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    if (isAuthorized) {
      const isValid = isTokenValid();
      if (!isValid) {
      }
    } else {
      console.log("redirect to Home page");
    }
  }, [isAuthorized]);

  return (
    <div>
      <p>Account Page</p>
    </div>
  );
};

export default AccountPage;
