import LoginAndSignSidbar from "./components/loginAndSignSidbar";
import LanguageToggle from "./components/LanguageToggle";
export default function Home() {
  return (
    <div className="flex relative min-h-[100vh]">
  <LoginAndSignSidbar isArabic={false}/>
  <LanguageToggle/>
    </div>
  );
}
