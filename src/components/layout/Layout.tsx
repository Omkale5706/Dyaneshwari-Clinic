import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="pb-20 pt-20 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
