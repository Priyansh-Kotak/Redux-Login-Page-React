import Button from "./Component/Button/Button";
import "./App.css";
import Auth from "./Component/Auth";
import Counter from "./Component/Counter";
import Header from "./Component/Header";

function App() {
  return (
    <section className="">
      <Header />
      <section className="flex flex-col  justify-center items-center space-x-4">
        <Auth />
        <Counter />
      </section>
    </section>
  );
}

export default App;
