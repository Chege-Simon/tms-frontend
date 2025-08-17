import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import { AuthProvider } from './context/AuthContext';
    import Layout from './components/Layout';
    import Login from './components/Login';
    import Dashboard from './pages/Dashboard';
    import Vehicles from './pages/Vehicles';
    import Invoices from './pages/Invoices';
    import Customers from './pages/Customers';
    import ProtectedRoute from './components/ProtectedRoute';

    function App() {
      return (
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/vehicles"
                  element={
                    <ProtectedRoute>
                      <Vehicles />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/invoices"
                  element={
                    <ProtectedRoute>
                      <Invoices />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/customers"
                  element={
                    <ProtectedRoute>
                      <Customers />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      );
    }

    export default App;