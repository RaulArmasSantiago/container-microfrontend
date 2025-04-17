import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//@ts-ignore
const UserListApp = lazy(() => import("user_list_app/UserList"));
//@ts-ignore
const UserDetailsApp = lazy(() => import("user_details_app/UserDetails"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" element={<UserListApp />} />
          <Route path="/user/:id" element={<UserDetailsApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
