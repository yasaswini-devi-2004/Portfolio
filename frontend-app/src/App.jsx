// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";       // Home page
import Profile from "./components/Profile.jsx"; // Profile page
import CV from "./components/CV.jsx";
import Feedback from "./components/Feedback.jsx";

function App() {
  const path = window.location.pathname;

  let content;
  if (path === "/profile") content = <Profile />;
  else if(path === "/feedback") content = <Feedback />;
  else if(path === "/cv") content = <CV />;
  else content = <Body />;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        {content}
      </div>

      <Footer />
    </div>
  );
}

export default App;