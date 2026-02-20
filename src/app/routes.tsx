import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { ServiceDetail } from "./pages/ServiceDetail";

// Lazy load pages untuk optimasi loading
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const AllServices = lazy(() => import("./pages/AllServices").then(m => ({ default: m.AllServices })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const PendirianPerusahaan = lazy(() => import("./pages/PendirianPerusahaan").then(m => ({ default: m.PendirianPerusahaan })));
const MediaPublication = lazy(() => import("./pages/MediaPublication").then(m => ({ default: m.MediaPublication })));
const ProjectTracking = lazy(() => import("./pages/ProjectTracking").then(m => ({ default: m.ProjectTracking })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));
const Career = lazy(() => import("./pages/Career").then(m => ({ default: m.Career })));
const Partnership = lazy(() => import("./pages/Partnership").then(m => ({ default: m.Partnership })));
const Team = lazy(() => import("./pages/Team").then(m => ({ default: m.Team })));
const AdminTracking = lazy(() => import("./pages/AdminTracking").then(m => ({ default: m.AdminTracking })));
const Blog = lazy(() => import("./pages/Blog").then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import("./pages/BlogPost").then(m => ({ default: m.BlogPost })));
const LandingPT = lazy(() => import("./pages/LandingPT").then(m => ({ default: m.LandingPT })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#5FBDBE]"></div>
  </div>
);

export const router = createBrowserRouter([
  {
    // Admin — layout sendiri (tanpa navbar/footer)
    path: "/admin",
    element: (
      <Suspense fallback={<PageLoader />}>
        <AdminTracking />
      </Suspense>
    ),
  },
  {
    // Landing Page PT — standalone tanpa navbar/footer
    path: "/promo-pt",
    element: (
      <Suspense fallback={<PageLoader />}>
        <LandingPT />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "all-services",
        element: <AllServices />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "pendirian-perusahaan",
        element: <PendirianPerusahaan />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/media-publication",
        element: <MediaPublication />,
      },
      {
        path: "tracking",
        element: <ProjectTracking />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "partnership",
        element: <Partnership />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <BlogPost />,
      },
      {
        path: "services/:serviceId",
        element: <ServiceDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);