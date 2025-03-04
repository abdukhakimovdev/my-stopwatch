import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // App komponentini chaqiramiz

// React ilovasini "root" ID ga ega bo‘lgan element ichiga joylashtiramiz
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
