import { describe, expect, it } from 'vitest';
import { formatTimecode, heroRank, pipelineProgress } from './lib.js';

describe('formatTimecode', () => {
  it('formate les secondes en HH:MM:SS', () => {
    expect(formatTimecode(0)).toBe('00:00:00');
    expect(formatTimecode(75)).toBe('00:01:15');
    expect(formatTimecode(3661)).toBe('01:01:01');
  });
  it('ignore les valeurs négatives', () => {
    expect(formatTimecode(-5)).toBe('00:00:00');
  });
});

describe('pipelineProgress', () => {
  it('calcule un pourcentage borné', () => {
    expect(pipelineProgress(2, 4)).toBe(50);
    expect(pipelineProgress(9, 4)).toBe(100);
    expect(pipelineProgress(1, 0)).toBe(0);
  });
});

describe('heroRank', () => {
  it('monte en grade avec le pipeline', () => {
    expect(heroRank(0, 5)).toBe('Spectateur');
    expect(heroRank(1, 5)).toBe('Figurant');
    expect(heroRank(3, 5)).toBe('Cascadeur');
    expect(heroRank(5, 5)).toBe('Last Github Action Hero');
  });
});
