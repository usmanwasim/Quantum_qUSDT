import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/Privacy";
import TermsOfUse from "./components/Terms";
// import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008000", // Core Tether green
      light: "#4CAF50", // Soft green for hover/accents
      dark: "#005f30", // Rich deep green for contrast
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#66bb6a", // Supporting mint green
      light: "#98ee99",
      dark: "#338a3e",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f3fdf6", // Subtle minty white background
      paper: "#ffffff",
    },
    text: {
      primary: "#004d26", // Dark green for strong readability
      secondary: "#388e3c",
    },
    success: {
      main: "#00c853",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
        containedPrimary: {
          background:
            "linear-gradient(-15deg, #005f30 30%, #008000 60%, #1faa59 90%)",
          boxShadow: "0 3px 5px 2px rgba(0, 128, 0, 0.3)",
          color: "#fff",
          "&:hover": {
            background:
              "linear-gradient(15deg, #005f30 30%, #008000 60%, #1faa59 90%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(45deg, #00b686 30%, #1de9b6 90%)",
          boxShadow: "0 3px 5px 2px rgba(0, 182, 134, 0.3)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(45deg, #009e73 30%, #00dab1 90%)",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <HowItWorks />
              <Services />
              <Roadmap />
              <FAQ />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfUse />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
