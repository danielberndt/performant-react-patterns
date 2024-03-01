import {useState} from "react";
import "./App.css";
import Expensive from "./Expensive";
import {Header, Nav, Page} from "./Page";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Header onToggleNav={() => setOpen(!isOpen)} />
      <Page>
        {isOpen && <Nav />}
        <Expensive />
      </Page>
    </>
  );
}

export default App;
