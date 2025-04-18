// eslint-disable-next-line import/prefer-default-export
export class DeliveredState {
	constructor(warehouseItem) {
		this.warehouseItem = warehouseItem;
	}

	describe() {
		return `Item ${this.warehouseItem.itemId} was delivered to ${this.warehouseItem.deliveredAddress}`;
	}
}
