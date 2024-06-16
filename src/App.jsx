import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { SupabaseAuthUI, useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Box } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Box p={4} display="flex" justifyContent="flex-end">
        {session ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button as="a" href="/login">Login</Button>
        )}
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={session ? <Navigate to="/" /> : <SupabaseAuthUI />} />
      </Routes>
    </Router>
  );
}

export default App;