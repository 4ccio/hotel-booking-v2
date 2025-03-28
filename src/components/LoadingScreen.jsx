import { Loader } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="flex items-center gap-2">
        <Loader size={16} className="animate-spin-slow" />
        <span>Загрузка</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
