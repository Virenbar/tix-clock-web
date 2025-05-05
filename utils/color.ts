import chroma from 'chroma-js';

export function color_mix(colorA: string, colorB: string, amount: number) {
  return chroma.mix(colorA, colorB, amount, 'rgb').hex();
}
