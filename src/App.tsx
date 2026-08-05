import { Navigate, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { FloatingActions } from './components/layout/FloatingActions';
import { pages } from './pages';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <LoadingScreen />
      <FloatingActions />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center text-slate-500">Loading page...</div>}>
          <Routes>
            <Route element={<Layout />}>
              {pages.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}
