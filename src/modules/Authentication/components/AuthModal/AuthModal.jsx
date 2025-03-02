import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS as bp } from "@/config/breakpoints";
import AuthDialog from "./AuthDialog";
import AuthDrawer from "./AuthDrawer";

const AuthModal = ({ children }) => {
  const isMobile = useMediaQuery(bp.sm);

  return isMobile ? (
    <AuthDrawer>{children}</AuthDrawer>
  ) : (
    <AuthDialog>{children}</AuthDialog>
  );
};

export default AuthModal;
