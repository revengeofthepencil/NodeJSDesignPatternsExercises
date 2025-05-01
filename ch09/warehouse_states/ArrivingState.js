// eslint-disable-next-line import/prefer-default-export
export class ArrivingState {
	constructor(warehouseItem) {
		this.warehouseItem = warehouseItem;
	}

	describe() {
		return `We are still waiting for ${this.warehouseItem.itemId} to get here`;
	}
}
