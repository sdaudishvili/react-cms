export const getActionsByFile = (file, acts = []) => {
  if (file.type === 'dir') {
    acts.push('open');
  }

  if (file.type === 'file') {
    acts.push('download');
    acts.push('crop');
  }
  acts.push('delete');

  return acts;
};
