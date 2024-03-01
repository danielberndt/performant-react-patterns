import "./App.css";
import Expensive from "./Expensive";
import {Header, Nav, Page} from "./Page";
import {create} from "zustand";

const useNavStore = create(() => ({isOpen: false}));

const actions = {
  toggleIsOpen: () => useNavStore.setState((prev) => ({isOpen: !prev.isOpen})),
};

function App() {
  return (
    <>
      <Header onToggleNav={actions.toggleIsOpen} />
      <Page>
        <SmartNav />
        <Expensive />
      </Page>
    </>
  );
}

function SmartNav() {
  const {isOpen} = useNavStore();
  return isOpen ? <Nav /> : null;
}

export default App;
