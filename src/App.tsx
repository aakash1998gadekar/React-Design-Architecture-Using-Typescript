import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AppTabs } from "./components/AppTabs";
import { Count } from "./components/Count";
import { Theme } from "./components/Theme";
import { UserDetails } from "./components/UserDetails";
import { CountNThemeProvider } from "./context/countNThemeContext";
import { UserProvider } from "./context/userContext";
import { AppAccordion } from "./components/AppAccordion";
import { ParentComponent } from "./components/RenderProps/ParentComponent";
import { MouseTracker } from "./components/RenderProps/MouseTracker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Mouse Tracker Example</h1>
        <MouseTracker />
         <CountNThemeProvider>
      
          <UserProvider>
          <h1>Count Example</h1>
            <Count />
            <h1>Theme Example</h1>
            <Theme />

            <h1>User Details Example</h1>
            <UserDetails />
            <h1>AppTabs Example</h1>
            <AppTabs />
            <br />
            <br />
            <h1>AppAccordion Example</h1>
            <AppAccordion />
          </UserProvider>
          <h1></h1>
        </CountNThemeProvider> 
        <h1>Parent Component Example</h1>
        <ParentComponent />
        
      </header>
    </div>
  );
}

export default App;
