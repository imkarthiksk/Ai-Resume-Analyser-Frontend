import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Iridescence from "../components/Iridescence";

function MainLayout() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Iridescence
          color={[0.6, 0.75, 0.95]}
          speed={1.0}
          amplitude={0.15}
          mouseReact={true}
        />
      </div>

      <div className="flex w-full">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main
          className="
            flex-1
            min-h-screen
            bg-[#F8FAFC]

            ml-0
            lg:ml-72

            w-full
            overflow-x-hidden
          "
        >
          <Navbar />

          <div
            className="
              w-full
              max-w-screen-2xl
              mx-auto

              px-3
              sm:px-4
              md:px-6
              lg:px-8
              xl:px-10

              py-4
              md:py-6
            "
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;