import Nav from "./components/Nav";
import Main from "./components/slide";
import Layout from "./components/layout"
function App() {

  
  return (
    <>
      <Nav StyleNav="w-full bg-black h-20 flex z-10 top-0 fixed"/>
      <Main />
      <Layout />
    </>
  );
}

export default App;
