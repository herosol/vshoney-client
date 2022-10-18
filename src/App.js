import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/home/Index";
import AboutUs from "./components/pages/about/Index";
import Faq from "./components/pages/faq/Index";
import TermsAndConditions from "./components/pages/terms/Index";
import PrivacyPolicy from "./components/pages/privacy/Index";
import ContactUs from "./components/pages/contact/Index";
import HowItWorks from "./components/pages/how/Index";
import TrainingPrograms from "./components/pages/training/Index";
import Pricing from "./components/pages/pricing/Index";
import Jobs from "./components/pages/jobs/Index";
import Blogs from "./components/pages/blogs/Index";
import BlogDetail from "./components/pages/blogs/Detail";
import Signup from "./components/pages/signup/Index";
import Signin from "./components/pages/signin/Index";
import ForgotPassword from "./components/pages/forgot/Index";
import ResetPassword from "./components/pages/reset/Index";
import Candidates from "./components/pages/candidates/Index";
import EmployerHome from "./components/pages/employer_home/Index";

import Dashboard from "./components/pages/dashboard/Index";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  const authToken = useSelector((state) => state.fetchSignin.authToken);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/faqs" element={<Faq />} />
        <Route
          exact
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/how-it-works" element={<HowItWorks />} />
        <Route exact path="/training-programs" element={<TrainingPrograms />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/candidates" element={<Candidates />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/employer-home" element={<EmployerHome />} />

        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog-detail/:id" element={<BlogDetail />} />

        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route
          exact
          path="/reset-password/:token"
          element={<ResetPassword />}
        />
        <Route
          exact
          path="/dashboard"
          element={authToken ? <Dashboard /> : <Navigate to="/signin" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
