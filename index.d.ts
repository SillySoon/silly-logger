declare module 'silly-logger' {
	export const logger: any;
	export function timeFormat(timeFormat: string): void;
	export function enableLogFiles(enableLogFiles: boolean): void;
	export function logFolderPath(logFolderPath: string): void;
	export function info(text: string): void;
	export function success(text: string): void;
	export function error(text: string): void;
	export function warn(text: string): void;
	export function crash(text: string): void;
	export function debug(text: string): void;
	export function startup(text: string): void;
	export function deploy(text: string): void;
	export function custom(prefixInput: string, prefixColor: string, textColor: string, textInput: string): void;
};