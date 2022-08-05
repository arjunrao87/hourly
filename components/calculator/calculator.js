import { useRouter } from "next/router";

export default function Calculator() {
  const router = useRouter();

  return (
    <div className="flex h-full mx-auto overflow-y-auto px-6">
      <div className="mt-8 max-w-md">
        <div className="grid grid-cols-1 gap-6">
          <div className="text-lg md:text-xl font-bold dark:text-slate-100">
            <div className="text-xl">{JSON.stringify(router.query)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
