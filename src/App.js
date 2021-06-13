import "./App.css";
import { Blog, Footer, Header, Hero, Newsletter, Presented, Welcome } from "./components";

function App() {
  return <>
  {/* header  section  */}
  <Header />
  {/* hero section */}
  <Hero />
  {/* welcome To Nature */}
  <Welcome />
  {/* presented by */}
  <Presented />
  {/* testimonials */}
  <Newsletter />
  {/* blog  section*/}
  <Blog />
  {/* footer */}
<Footer />  
  </>;
}

export default App;
