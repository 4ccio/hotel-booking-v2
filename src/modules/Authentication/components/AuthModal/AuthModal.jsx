import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS as bp } from "@/config/breakpoints";
import AuthDialog from "./AuthDialog";
import AuthDrawer from "./AuthDrawer";
import { useAuthModal } from "../../hooks/useAuthModal";

const AuthModal = ({ children }) => {
  const isMobile = useMediaQuery(bp.sm);
  const props = useAuthModal();

  const ModalComponent = isMobile ? AuthDrawer : AuthDialog;

  // return isMobile ? (
  //   <AuthDrawer>{children}</AuthDrawer>
  // ) : (
  //   <AuthDialog>{children}</AuthDialog>
  // );
  return <ModalComponent {...props}>{children}</ModalComponent>;
};

export default AuthModal;
