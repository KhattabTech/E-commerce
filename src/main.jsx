import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./components/CartContext.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-zo3shgyyuqx2thci.us.auth0.com"
    clientId="cFSUb199cKjL4R3BYhw0Dpv41KOIyzES"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <CartProvider>
      <App />
    </CartProvider>
    
  </Auth0Provider>
);
