const copyToClipboard = (toCopy: string) => {
  const temporaryInput = document.createElement('input');
  document.body.appendChild(temporaryInput);
  temporaryInput.value = toCopy;
  temporaryInput.select();
  document.execCommand('copy', false);
  temporaryInput.remove();
};
export default copyToClipboard;
