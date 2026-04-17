import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SearchProvider } from './context/SearchContext';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import HotelDetailPage from './pages/HotelDetailPage';
import SignInPage from './pages/SignInPage';
import CreateAccountPage from './pages/CreateAccountPage';
import DashboardPage from './pages/DashboardPage';
import HotelFormPage from './pages/HotelFormPage';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/hotel/:id" element={<HotelDetailPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/register" element={<CreateAccountPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/add-hotel"
              element={
                <ProtectedRoute>
                  <HotelFormPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
