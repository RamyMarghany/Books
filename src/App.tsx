// Components
import { Navbar } from "components/molecules/Navbar/Navbar";
import { AppRouter } from "components/molecules/AppRouter/AppRouter";

// Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
