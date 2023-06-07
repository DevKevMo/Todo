import React from "react";
import { Toaster } from "react-hot-toast";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default App;
