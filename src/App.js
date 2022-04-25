import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageBase from "components/pages/PageBase";
import Error404Page from "components/pages/Error404Page";
import HomePage from "components/pages/HomePage";
import SchedulerPage from "components/pages/SchedulerPage";
import OverviewPage from "components/pages/OverviewPage";
//import AdminPage from "components/pages/AdminPage";
import Admin from "components/Admin/Admin";
import TempMachine from "components/Admin/Machines/TempMachine";

import UserContext from "context/UserContext";

function App() {
  const [user, setUser] = React.useState(null);
  const userProvider = React.useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={userProvider}>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route path="" element={<HomePage />} />
            <Route path="admin" element={<Admin />}>
              <Route path=":machine" element={<TempMachine />} />
            </Route>
            <Route path="schedule" element={<SchedulerPage />} />
            <Route path="overview" element={<OverviewPage />} />
          </Route>

          {/* Page not found route */}
          <Route path="*" element={<Error404Page />} status={404} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
