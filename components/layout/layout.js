import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen">
        <div className="flex h-full">
          <Sidebar>Left Sidebar</Sidebar>
          <div className="mx-auto flex flex-col w-full bg-blue-100 dark:bg-slate-700 items-center">
            {children}
          </div>
          <Sidebar>Right Sidebar</Sidebar>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
