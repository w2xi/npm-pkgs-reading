# yocto-queue —— 一个 tiny 使用链表实现的队列库


## 简单的介绍下链表

链表是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的指针(Pointer)。

链表有一个数据域和一个指针域。

在 JavaScript 中，下面的 `Node` 的实例对象就可以用来表示一个链表节点:

```js
function Node(value) {
    this.value = value;
    this.next = null;
}
```

```js
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
```

![linked-list](./public/linked-list.png)

## yocto-queue 库

Github: [yocto-queue](https://github.com/sindresorhus/yocto-queue)

如下面代码所示，这就是 `yocto-queue` 的所有代码:

```js
class Node {
	value;
	next;
	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;
	constructor() {
		this.clear();
	}
	enqueue(value) {
		const node = new Node(value);
		if (this.#head) {
			this.#tail.next = node;
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
		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}
	clear() {
		this.#head = undefined;
		this.#tail = undefined;
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
```