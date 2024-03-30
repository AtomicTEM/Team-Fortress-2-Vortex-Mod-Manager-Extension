import path from 'path';

// DAH! extension only support .vpk mods.
export const MOD_FILE_EXT = '.vpk';
export const GAME_ID = 'teamfortress2';
export const LO_FILE_NAME = 'loadOrder.json';

export function modsRelPath() {
  return path.join('tf', 'custom');
}