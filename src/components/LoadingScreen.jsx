import { Loader } from "lucide-react";

const LoadingScreen = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <div className="flex items-center gap-2">
        <Loader size={16} className="animate-spin-slow" />
        <span>Загрузка</span>
      </div>
    </main>
  );
};

export default LoadingScreen;
