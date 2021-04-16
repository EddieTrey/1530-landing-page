import Landing from './components/Landing';
import GlobalStyle from './globalStyles';

// Main app, imporats the landing page.js
function App() {
  return (
    <>
      <GlobalStyle />
      {/*<Navbar />*/}
      <Landing />
    </>
  );
}

export default App;
