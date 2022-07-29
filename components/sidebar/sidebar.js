export default function Sidebar({ color, children }) {
  return (
    <div className="h-full hidden md:block md:w-60 items-center justify-center bg-purple-200">
      {children}
    </div>
  );
}
