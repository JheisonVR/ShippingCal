import { Calculator, Navbar, Services } from "./components";

export default function Home() {
  return (
    <main className="h-screen w-full bg-slate-50">
      <Services/>
      <Calculator/>
      <Navbar/>
    </main>
  );
}
