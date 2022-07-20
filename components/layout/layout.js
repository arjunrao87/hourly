import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen pt-12	flex flex-col items-center">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
