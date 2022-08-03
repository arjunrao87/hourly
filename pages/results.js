import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  return (
    <div>
      <div className="text-xl">{JSON.stringify(router.query)}</div>
    </div>
  );
}
