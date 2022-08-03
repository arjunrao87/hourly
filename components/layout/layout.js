import Header from "../header/header";
import Footer from "../footer/footer";
import LeftSidebar from "../sidebar/left";
import RightSidebar from "../sidebar/right";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen">
        <div className="flex h-full">
          <LeftSidebar />
          <div className="mx-auto flex flex-col h-full w-full bg-gray-200 dark:bg-slate-700">
            <h1 className="py-4 text-xl text-left px-2 md:py-8 md:text-center md:items-center md:text-5xl font-bold dark:text-slate-100">
              <Link href="/">
                <a>🤑 Hourly</a>
              </Link>
            </h1>
            {children}
          </div>
          <RightSidebar />
        </div>
        <div className="flex items-center justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
