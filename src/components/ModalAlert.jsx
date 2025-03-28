import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS as bp } from "@/config/breakpoints";
import DrawerAlert from "./DrawerAlert";
import DialogAlert from "./DialogAlert";

const ModalAlert = ({ children, ...props }) => {
  const isMobile = useMediaQuery(bp.sm);

  return (
    <>
      {isMobile ? (
        <DrawerAlert {...props}>{children}</DrawerAlert>
      ) : (
        <DialogAlert {...props}>{children}</DialogAlert>
      )}
    </>
  );
};

export default ModalAlert;
