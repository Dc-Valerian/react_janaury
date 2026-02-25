import CardProps from "./Components/CardProps/CardProps";
import Header from "./Components/Header/Header";
import HeroPage from "./Components/HomePage/HeroPage";

function Card({ children }) {
  return <div>{children}</div>;
}

function App() {
  return (
    <div>
      <Header />
      <HeroPage name="Pedro" />
      <Card>
        <h2>Title</h2>
        <p>This is the card component</p>
      </Card>
      <CardProps name="Valerian" age="+2" location="Akwa" gender="Male" />
    </div>
  );
}

export default App;
