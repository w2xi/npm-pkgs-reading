class Node<T> {
	value: T;
	next: Node<T> | null = null;
	constructor(value: T) {
		this.value = value;
	}
}

export class Queue<T> {
	#head: Node<T> | null = null;
	#tail: Node<T> | null = null;
	#size: number = 0;
	constructor() {
		this.clear();
	}
	enqueue(value: T) {
		const node = new Node<T>(value);
		if (this.#head) {
			this.#tail!.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}
		this.#size++;
	}
	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}
		this.#head = current.next;
		this.#size--;
		return current.value;
	}
	clear() {
		this.#head = null;
		this.#tail = null;
		this.#size = 0;
	}
	get size() {
		return this.#size;
	}
	* [Symbol.iterator]() {
		let current = this.#head;
		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}