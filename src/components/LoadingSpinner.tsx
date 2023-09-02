import { VscRefresh } from "react-icons/vsc";

type LoadingSpinnerProps = {
  big?: boolean;
};

export default function LoadingSpinner({ big = false }: LoadingSpinnerProps) {
  const sizes = big ? "h-16 w-16" : "h-10 w-10";
  return (
    <div className="flex justify-center p-2">
      <VscRefresh className={`animate-spin ${sizes}`} />
    </div>
  );
}
