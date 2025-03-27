import { CircleCheckIcon } from "lucide-react";

export default function AlertSuccess({ children }) {
  return (
    <div className="w-fit rounded-md border border-success-component/50 px-4 py-2 text-success-text">
      <p className="text-sm">
        <CircleCheckIcon
          className="-mt-0.5 me-2 inline-flex opacity-70"
          size={16}
          aria-hidden="true"
        />
        {children}
      </p>
    </div>
  );
}
