import type { ErrorProps } from "../../types/types";

import ErrorNavBar from "./ErrorNavBar";
import ErrorMobileNavBar from "./ErrorMobileNavBar";
import ErrorDetails from "./ErrorDetails";
import ContactSection from "../landing-page/ContactSection";
function ErrorPage({ toggleIsDarkMode, isDarkMode }: ErrorProps) {
  return (
    <div className="w-full min-h-lvh bg-second-primary dark:bg-first-primary flex flex-col transition-colors duration-300">
      <ErrorNavBar
        toggleIsDarkMode={toggleIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <ErrorMobileNavBar
        toggleIsDarkMode={toggleIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <div className=" w-full h-full flex justify-center grow flex-col items-center">
        <div className="max-w-7xl p-4  flex flex-col w-full h-full grow">
          <ErrorDetails />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
