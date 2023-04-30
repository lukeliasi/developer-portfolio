export function friendlyDate(date) {
  const publishedAtDate = new Date(date);
  return publishedAtDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}