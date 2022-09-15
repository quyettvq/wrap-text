import {wrapText as wrapText_dev, measureText as measureText_dev}  from './esm/unicode.development.js';
import {wrapText as wrapText_prod, measureText as measureText_prod}  from './esm/unicode.production.js';

let isDev = process.env.NODE_ENV !== 'production';

export let wrapText = isDev ? wrapText_dev : wrapText_prod;
export let measureText = isDev ? measureText_dev : measureText_prod;
