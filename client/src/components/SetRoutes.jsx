import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./Search";
import AddContactModal from "./AddContactModal";
import ContactsDisplay from "./ContactsDisplay";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import storageService from "../utils/localStorageHelpers";

const SetRoutes = ({
  contacts,
  setContacts,
  user,
  setUser,
  search,
  setSearch,
  options,
  handleOptionAddition,
  notify,
  isLoading,
  isDarkMode,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          storageService.loadUser() || user ? (
            <>
              <Search
                setSearch={setSearch}
                search={search}
                isDarkMode={isDarkMode}
              />
              <AddContactModal
                setContacts={setContacts}
                options={options}
                handleOptionAddition={handleOptionAddition}
                notify={notify}
                isDarkMode={isDarkMode}
              />
              <ContactsDisplay
                contacts={contacts}
                setContacts={setContacts}
                search={search}
                options={options}
                handleOptionAddition={handleOptionAddition}
                notify={notify}
                isLoading={isLoading}
                isDarkMode={isDarkMode}
              />
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/register"
        element={
          <RegisterForm
            setUser={setUser}
            notify={notify}
            isDarkMode={isDarkMode}
          />
        }
      />
      <Route
        path="/login"
        element={
          <LoginForm
            setUser={setUser}
            notify={notify}
            isDarkMode={isDarkMode}
          />
        }
      />
    </Routes>
  );
};

export default SetRoutes;
