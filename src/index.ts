/**
 * @file index.ts
 * @description Entry point for the library
 * @package Boilerplate
 * @version 1.0.0
 * @license MIT
 */

// Put global reference to instantiable entrypoint
// ------------------------------------------------------------------------

declare global {
	interface Window {
		ExampeProject: any;
	}
}

// Exports
// ------------------------------------------------------------------------

export { default as Example } from './Example/index.js';

export { default as Exception } from './Exception/index.js';
