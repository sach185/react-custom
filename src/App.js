import AboutUs from "./components/about-us";
import Header from "./components/header";
import Home from "./components/home";
import Route from "./components/route";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ padding: "20px" }}>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
      </div>
    </div>
  );
}
