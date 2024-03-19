import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HotAlbums from "./pages/HotAlbums";
import TrendingPosts from "./pages/TrendingPosts";
import Navbar from "./components/Navbar";
import LocaleWrapper from "./components/LocaleWrapper";
import RootRedirect from "./components/RootRedirect";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-800 text-gray-300">
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<RootRedirect />} />

            <Route
              path="/:lang"
              element={<LocaleWrapper />}
            >
              <Route index element={<HomePage />} />
              <Route
                path="hot-albums"
                element={<HotAlbums />}
              />
              <Route
                path="trending-posts"
                element={<TrendingPosts />}
              />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
