import { lazy } from 'react';

const lazyPage = <T extends Record<string, never>>(loader: () => Promise<{ [key: string]: unknown }>, exportName: string) =>
  lazy(() => loader().then((module) => ({ default: module[exportName as keyof typeof module] as React.ComponentType<T> })));

const HomePage = lazyPage(() => import('./HomePage'), 'HomePage');
const DoctorsPage = lazyPage(() => import('./DoctorsPage'), 'DoctorsPage');
const AppointmentPage = lazyPage(() => import('./AppointmentPage'), 'AppointmentPage');
const ContactPage = lazyPage(() => import('./ContactPage'), 'ContactPage');
const PrivacyPolicyPage = lazyPage(() => import('./PrivacyPolicyPage'), 'PrivacyPolicyPage');
const NotFoundPage = lazyPage(() => import('./NotFoundPage'), 'NotFoundPage');

export const pages = [
  { path: '/', component: HomePage },
  { path: '/doctors', component: DoctorsPage },
  { path: '/appointment', component: AppointmentPage },
  { path: '/contact', component: ContactPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
  { path: '/404', component: NotFoundPage }
];
