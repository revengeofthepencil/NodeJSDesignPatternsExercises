// eslint-disable-next-line import/prefer-default-export
export class CancelError extends Error {
	constructor() {
		super('Canceled');
		this.isCanceled = true;
	}
}
