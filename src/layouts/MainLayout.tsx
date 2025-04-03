import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      {/* <main className="flex-1 w-full"> */}
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
