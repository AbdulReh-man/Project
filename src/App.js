import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const location = useLocation();

  // Add the paths of pages without header and footer
  const pagesWithoutHeaderFooter = ["/home", "/myorders"]; // Add "/profile" to exclude header and footer for profile.jsx

  // Check if the current page should have header and footer
  const shouldShowHeaderFooter = !pagesWithoutHeaderFooter.includes(
    location.pathname
  );

  return (
    <>
      {shouldShowHeaderFooter && <Navbar />}
      <Outlet />
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

export default App;
