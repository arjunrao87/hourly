import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex justify-between items-center bg-orange-300 p-4">
            <div className="flex">Left</div>
            <div className="flex">Middle</div>
            <div className="flex">Right</div>
          </header>
          <div className="flex h-full">
            <nav className="flex w-72 h-full bg-blue-500 mx-auto px-6 py-8 items-center justify-center">
              <div className="">Left Sidebar</div>
            </nav>
            <main className="flex flex-col w-full bg-green-200 overflow-x-hidden overflow-y-auto items-center ">
              <div className="flex mt-8">{children}</div>
            </main>
            <nav className="flex w-72 h-full bg-red-500 mx-auto px-6 py-8 items-center justify-center">
              <div className="">Right Sidebar</div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
