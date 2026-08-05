import { useEffect } from 'react';

type Props = {
  title: string;
  description: string;
  path?: string;
};

export function SEO({ title, description, path = '' }: Props) {
  useEffect(() => {
    const fullTitle = `${title} | Dyaneshwari Clinic`;
    document.title = fullTitle;
    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        if (property) tag.setAttribute('property', name);
        else tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    if (path) setMeta('og:url', path, true);
  }, [title, description, path]);

  return null;
}
