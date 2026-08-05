export type DoctorProfile = {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  languages: string[];
  timing: string;
  bio: string;
};

export const clinic = {
  name: 'DYANESHWARI CLINIC',
  phone: '8983989814',
  whatsapp: '8983989814',
  email: 'drpravinmohite.dycc@gmail.com',
  address: 'Dyaneshwari Clinic, Moraya Nagar, Pune, Maharashtra',
  mapUrl: 'https://www.google.com/maps/search/Dyaneshwari+Clinic/@18.6456679,73.8897402,15.13z',
  timings: 'Monday – Saturday | 10:00 AM – 1:00 PM, 5:00 PM – 10:00 PM'
};

export const doctor: DoctorProfile = {
  name: 'Dr Pravin Mohite',
  qualification: 'BHMS (MUHS Nashik), PGDEMS, PGDCC',
  specialization: 'Family Medicine, General Consultation, Emergency & Critical Care Support',
  experience: '15+ Years',
  languages: ['Marathi', 'Hindi', 'English'],
  timing: clinic.timings,
  bio: 'Focused on simple, respectful, family-first care with easy appointment booking and quick patient communication.'
};
