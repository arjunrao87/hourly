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
        <div className="flex h-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 dark:bg-slate-700">
          <LeftSidebar />
          <div className="mx-auto flex flex-col h-full w-full">
            <h1 className="py-4 text-xl text-left px-2 md:py-8 md:text-center md:items-center md:text-5xl font-bold dark:text-slate-100">
              <Link href="/">
                <a>🤑 Hourly</a>
              </Link>
            </h1>
            {children}
          </div>
          <RightSidebar />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
