import { useRouter } from "next/router";

export default function Calculator() {
  const router = useRouter();

  return (
    <div className="flex h-full mx-auto overflow-x-auto ">
      <div className="grid grid-cols-1 gap-6 p-4">
        <div className="text-xl">{JSON.stringify(router.query)}</div>
      </div>
    </div>
  );
}
