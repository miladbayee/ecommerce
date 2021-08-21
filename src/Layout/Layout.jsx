import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "../Routes/Roustes";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <Router>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <main className="container">
              <div className="main">
                <Routes />
              </div>
            </main>
            <Footer />
          </>
        )}
      />
    </Router>
  );
};

export default Layout;
