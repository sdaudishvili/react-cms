/* eslint-disable no-param-reassign */
import { getActionsByFile } from './getActionsByFile';

export const getActionsByMultipleFiles = (files = [], acts = []) => {
  files.forEach((file) => {
    const fileActs = getActionsByFile(file);
    acts = acts.length ? acts.filter((value) => fileActs.indexOf(value) !== -1) : fileActs;
  });

  if (files.length > 1) {
    acts.splice(acts.indexOf('open'), acts.indexOf('open') >= 0);
    acts.splice(acts.indexOf('download'), acts.indexOf('download') >= 0);
    acts.splice(acts.indexOf('crop'), acts.indexOf('crop') >= 0);
  }
  return acts;
};
