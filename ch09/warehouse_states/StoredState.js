// eslint-disable-next-line import/prefer-default-export
export class StoredState {
	constructor(warehouseItem) {
		this.warehouseItem = warehouseItem;
	}

	describe() {
		return `Item ${this.warehouseItem.itemId} is stored in location ${this.warehouseItem.locationId}`;
	}
}
