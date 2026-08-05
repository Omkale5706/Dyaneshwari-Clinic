export type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export async function submitToFormspree(payload: Record<string, string | boolean | null | undefined>) {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  if (!endpoint) {
    throw new Error('Formspree is not configured.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Formspree submission failed.');
  }

  return response.json();
}
