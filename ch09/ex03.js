/* eslint-disable import/extensions */
import { ArrivingState } from './warehouse_states/ArrivingState.js';
import { DeliveredState } from './warehouse_states/DeliveredState.js';
import { StoredState } from './warehouse_states/StoredState.js';

/*
Exercise 9.3 Warehouse item: Imagine we are working on a warehouse management program. Our next
task is to create a class to model a warehouse item and help track it. Such a WarehouseItem class
has a constructor, which accepts an id and the initial state of the item (which can be one of
arriving, stored, or delivered). It has three public methods:
- store(locationId) moves the item into the stored state and records the locationId where
	it's stored.
- deliver(address) changes the state of the item to delivered, sets the delivery address,
	and clears the locationId.
- describe() returns a string representation of the current state of the item
	(for example, "Item 5821 is on its way to the warehouse," or "Item 3647 is stored
	in location 1ZH3," or "Item 3452 was delivered to John Smith, 1st Avenue, New York."

The arriving state can be set only when the object is created as it cannot be transitioned
to from the other states. An item can't move back to the arriving state once it's stored or
delivered, it cannot be moved back to stored once it's delivered, and it cannot be delivered
if it's not stored first. Use the State pattern to implement the WarehouseItem class.
*/
class WarehouseItem {
	constructor(itemId, initState = 'arriving', initStateData = {}) {
		if (!itemId) { throw new Error('sorry, you have to give me an item id'); }
		this.locationId = null;
		this.deliveredAddress = null;
		this.itemId = itemId;
		this.states = {
			arriving: new ArrivingState(this),
			delivered: new DeliveredState(this),
			stored: new StoredState(this),
		};

		this.itemState = this.states[initState] || this.states.arriving;
		if (initState !== 'arriving') {
			if (initState === 'delivered') {
				if (!initStateData.deliveredAddress) {
					throw new Error('Delivered items must pass a deliveredAddress');
				}

				this.deliveredAddress = initStateData.deliveredAddress;
			} else if (initState === 'stored') {
				if (!initStateData.locationId) {
					throw new Error('Stored items must pass a locationId');
				}

				this.locationId = initStateData.locationId;
			}
		}
	}

	store(locationId) {
		if (this.itemState === this.states.delivered) {
			throw new Error(`Item ${this.itemId} can only be stored if it is not delivered`);
		}

		this.locationId = locationId;
		this.itemState = this.states.stored;
	}

	deliver(address) {
		if (this.itemState !== this.states.stored) {
			throw new Error(`Item ${this.itemId} can only be delivered if it is stored`);
		}
		this.deliveredAddress = address;
		this.locationId = null;
		this.itemState = this.states.delivered;
	}

	describe() {
		return this.itemState.describe();
	}
}

// test constructor validation
['delivered', 'stored'].forEach(failureState => {
	try {
		const failed = new WarehouseItem(`this_will_fail_${failureState}`, failureState);
		failed.describe();
	} catch (e) {
		console.error(`error: ${e.message}`);
	}
});

const myItemArriving = new WarehouseItem('myItemArriving');
console.log(myItemArriving.describe());
try {
	myItemArriving.deliver('somewhere');
} catch (e) {
	console.error(`error: ${e.message}`);
}

myItemArriving.store('3333');
console.log(myItemArriving.describe());

myItemArriving.store('89882B');
console.log(myItemArriving.describe());

myItemArriving.deliver('somewhere');
console.log(myItemArriving.describe());

try {
	myItemArriving.store('89882B');
} catch (e) {
	console.error(`error: ${e.message}`);
}

const newStoredItem = new WarehouseItem('storeThis', 'stored', { locationId: '969867A98C' });
console.log(newStoredItem.describe());

const newDeleiveredItem = new WarehouseItem('deliverThis', 'delivered', { deliveredAddress: 'Yet another place' });
console.log(newDeleiveredItem.describe());
