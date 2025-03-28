import { useState } from "react";

export const useAuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signIn");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const clearMessages = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  const onModalClose = () => {
    handleModalState(false);
    clearMessages();
  };

  const handleModalState = (newValue) => {
    setIsOpen(newValue);
    clearMessages();
  };

  const handleTabsChange = (newValue) => {
    setActiveTab(newValue);
    clearMessages();
  };

  const onSignInSuccess = () => {
    onModalClose();
  };

  const onSignUpSuccess = () => {
    handleTabsChange("signIn");
    setSuccessMessage("Регистрация прошла успешно!");
  };

  return {
    isOpen,
    handleModalState,
    activeTab,
    handleTabsChange,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    onSignInSuccess,
    onSignUpSuccess,
  };
};
