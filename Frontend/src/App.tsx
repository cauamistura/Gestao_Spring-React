import './index.css';
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="container-main" />
            <SalesCard />
        </section>
      </main>
    </>
  )
}

export default App;
