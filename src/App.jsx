import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Quote from './pages/Quote';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import UserSidebar from './components/UserSidebar';
import UserCompaniesList from './pages/UserCompaniesList';
import UserCompaniesCreate from './pages/UserCompaniesCreate';
import UserProjectCreate from './pages/UserProjectCreate';
import UserProjectList from './pages/UserProjectList';
import UsersPage from './pages/UsersPage';
import Sample from './pages/Sample';

// Create AuthContext and Auth hook
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function ProtectedRoute({ element: Component, ...rest }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login state based on token presence
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/sample" element={<Sample />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard/*"
                element={
                  <ProtectedRoute
                    element={() => (
                      <div className="flex w-full min-h-screen">
                        <UserSidebar />
                        <div className="flex-grow p-4 overflow-y-auto">
                          <Routes>
                            <Route path="/" element={<UserDashboard />} />
                            <Route path="companies-list" element={<UserCompaniesList />} />
                            <Route path="companies-create" element={<UserCompaniesCreate />} />
                            <Route path="project-create" element={<UserProjectCreate />} />
                            <Route path="project-list" element={<UserProjectList />} />
                            <Route path="users" element={<UsersPage />} />
                          </Routes>
                        </div>
                      </div>
                    )}
                  />
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
