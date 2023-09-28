export function downloadFile(url: string, filename: string) {
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.click();
}

export function openFileInNewTab(url: string) {
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', url);
  link.click();
}
