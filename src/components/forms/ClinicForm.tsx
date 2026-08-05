import { useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { submitToFormspree, type SubmissionStatus } from '../../services/formspree';

type FormMode = 'appointment' | 'contact';

type Props = {
  title?: string;
  submitLabel?: string;
  mode?: FormMode;
};

type FormValues = {
  patientName: string;
  age?: string;
  gender?: string;
  phoneNumber: string;
  email: string;
  preferredDate?: string;
  preferredTime?: string;
  problem?: string;
  medicalHistory?: string;
  existingPatient?: 'Yes' | 'No';
  preferredContactMethod?: string;
  contactMessage?: string;
  privacyPolicy: boolean;
};

export function ClinicForm({ title, submitLabel = 'Submit Request', mode = 'appointment' }: Props) {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [popupMessage, setPopupMessage] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: { existingPatient: 'No', privacyPolicy: true }
  });

  async function onSubmit(values: FormValues) {
    setStatus('loading');
    try {
      await submitToFormspree({
        _subject: `${mode === 'contact' ? 'Contact' : 'Appointment'} Request`,
        formType: mode,
        ...values,
        privacyPolicy: values.privacyPolicy ? 'Agreed' : 'Not agreed'
      });
      setStatus('success');
      setPopupMessage('Thank you for contacting Dyaneshwari Clinic. Your request has been received successfully. Our team will contact you shortly.');
      reset({ existingPatient: 'No', privacyPolicy: true });
    } catch {
      setStatus('error');
      setPopupMessage('We could not send your request right now. Please try again in a moment or contact the clinic directly.');
    }
  }

  const required = (message: string) => ({ required: message });

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-3xl border border-white/70 bg-white/85 p-5 shadow-soft backdrop-blur-xl sm:p-6">
        {title ? <h3 className="text-2xl font-semibold text-slate-900">{title}</h3> : null}
        {mode === 'contact' ? (
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Your Name" error={errors.patientName?.message}><input {...register('patientName', required('Please enter your name'))} /></Field>
            <Field label="Phone Number" error={errors.phoneNumber?.message}><input {...register('phoneNumber', { ...required('Enter a valid phone number'), minLength: { value: 10, message: 'Enter a valid phone number' } })} /></Field>
            <Field label="Email" error={errors.email?.message}><input type="email" {...register('email', { ...required('Enter a valid email address'), pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' } })} /></Field>
            <div />
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Patient Name" error={errors.patientName?.message}><input {...register('patientName', required('Please enter the patient name'))} /></Field>
            <Field label="Age" error={errors.age?.message}><input type="number" {...register('age', required('Age is required'))} /></Field>
            <Field label="Gender" error={errors.gender?.message}><select {...register('gender', required('Please select gender'))}><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></Field>
            <Field label="Phone Number" error={errors.phoneNumber?.message}><input {...register('phoneNumber', { ...required('Enter a valid phone number'), minLength: { value: 10, message: 'Enter a valid phone number' } })} /></Field>
            <Field label="Email" error={errors.email?.message}><input type="email" {...register('email', { ...required('Enter a valid email address'), pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' } })} /></Field>
            <Field label="Preferred Date" error={errors.preferredDate?.message}><input type="date" {...register('preferredDate')} /></Field>
            <Field label="Preferred Time" error={errors.preferredTime?.message}><input type="time" {...register('preferredTime')} /></Field>
            <Field label="Existing Patient" error={errors.existingPatient?.message}><select {...register('existingPatient')}><option value="No">No</option><option value="Yes">Yes</option></select></Field>
            <Field label="Preferred Contact Method" error={errors.preferredContactMethod?.message}><select {...register('preferredContactMethod')}><option value="">Select</option><option>Phone</option><option>WhatsApp</option><option>Email</option></select></Field>
          </div>
        )}

        {mode === 'appointment' ? <><Field label="Problem" error={errors.problem?.message}><textarea rows={4} {...register('problem', required('Please describe the problem'))} /></Field><Field label="Medical History" error={errors.medicalHistory?.message}><textarea rows={4} {...register('medicalHistory')} /></Field></> : <Field label="Your Message" error={errors.contactMessage?.message}><textarea rows={5} {...register('contactMessage', required('Please enter your message'))} /></Field>}

        <label className="flex items-start gap-3 rounded-2xl bg-brand-50 px-4 py-3 text-sm text-slate-700"><input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-600" {...register('privacyPolicy', { validate: (value) => value || 'You must agree to the Privacy Policy' })} /><span>I agree to the Privacy Policy</span></label>
        {errors.privacyPolicy ? <p className="text-sm text-rose-600">{errors.privacyPolicy.message}</p> : null}
        <Button type="submit" className="min-w-40 justify-center sm:w-fit" fullWidth disabled={status === 'loading'} aria-busy={status === 'loading'}>{status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : null}{status === 'loading' ? 'Sending...' : submitLabel}</Button>
      </form>
      <Modal open={status === 'success' || status === 'error'} title={status === 'success' ? 'Request Sent' : 'Submission Failed'} message={popupMessage} type={status === 'success' ? 'success' : 'error'} onClose={() => setStatus('idle')} />
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100 [&>input]:min-h-6 [&>input]:w-full [&>input]:border-0 [&>input]:bg-transparent [&>input]:text-slate-900 [&>input]:outline-none [&>select]:min-h-6 [&>select]:w-full [&>select]:border-0 [&>select]:bg-transparent [&>select]:text-slate-900 [&>select]:outline-none [&>textarea]:w-full [&>textarea]:border-0 [&>textarea]:bg-transparent [&>textarea]:text-slate-900 [&>textarea]:outline-none">
        {children}
      </div>
      {error ? <span className="text-xs font-medium text-rose-600" role="alert">{error}</span> : null}
    </label>
  );
}
