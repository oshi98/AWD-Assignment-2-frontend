import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import "./App.css";
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<ListEmployeeComponent></ListEmployeeComponent>}
            />
            <Route
              exact
              path="/employees"
              element={<ListEmployeeComponent />}
            />
            <Route
              exact
              path="/add-employee"
              element={<AddEmployeeComponent />}
            ></Route>
            <Route
              exact
              path="/edit-employee/:id"
              element={<AddEmployeeComponent />}
            ></Route>
          </Routes>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
