import { Route, BrowserRouter, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/404/not-found";
import {
  ChallengeListPage,
  ChallengesRoutes,
} from "./pages/challenge-list/challenge-list-page";
import { Home } from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<ChallengeListPage />} />
        <Route path="/challenges/*" element={<ChallengesRoutes />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
