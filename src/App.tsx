import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta property="og:title" content="This is the home og:title." />
        <meta property="og:description" content="This is the home og:description." />
      </Helmet>
      <div>Home</div>
    </>
  );
}
function Page1() {
  return (
    <>
      <Helmet>
        <title>Page 1</title>
        <meta property="og:title" content="This is the Page 1 title." />
        <meta property="og:description" content="This is the Page 1 og:description." />
      </Helmet>
      <div>Page1</div>
    </>
  );
}

function Page2() {
  return (
    <>
      <Helmet>
        <title>Page 2</title>
        <meta property="og:title" content="This is the Page 2 og:title." />
        <meta property="og:description" content="This is the Page 2 og:description." />
      </Helmet>
      <div>Page2</div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
