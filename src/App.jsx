import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import DashboardPage from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFound";
import CalendarPage from "./pages/Calendar";
import AddEditEntryPage from "./pages/AddEditEntry";
import TagsPage from "./pages/Tags";
import SettingsPage from "./pages/Settings";
import Layout from "./components/layout/Layout";
import entryService from "./services/entryService";
import ResponsiveProvider from "./providers/ResponsiveProvider";

const App = () => {
  useEffect(() => {
    async function initialize() {
      await entryService.initDB();
      //   const success = await entryService.initDB();
      //   if (success) {
      //     console.log("DB initialized!");
      //   } else {
      //     console.error("Failed to initialize DB");
      //   }
    }
    initialize();
  }, []);

  return (
    <ResponsiveProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<DashboardPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/addEdit" element={<AddEditEntryPage />} />
              <Route path="/tags" element={<TagsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </ResponsiveProvider>
  );
};

export default App;
