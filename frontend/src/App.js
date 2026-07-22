import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import CustomManufacturing from "@/pages/CustomManufacturing";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import LegalPage from "@/pages/LegalPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/custom" element={<CustomManufacturing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<LegalPage pageKey="privacy" />} />
            <Route path="/terms" element={<LegalPage pageKey="terms" />} />
            <Route path="/shipping" element={<LegalPage pageKey="shipping" />} />
            <Route path="/warranty" element={<LegalPage pageKey="warranty" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </LanguageProvider>
  );
}

export default App;
