import { CircleAlert } from "lucide-react";

export default function AlertError({ children }) {
  return (
    <div className="w-fit rounded-md border border-warning-component/50 px-4 py-2 text-warning-text">
      <p className="text-sm">
        <CircleAlert
          className="-mt-0.5 me-2 inline-flex opacity-70"
          size={16}
          aria-hidden="true"
        />
        {children}
      </p>
    </div>
  );
}
