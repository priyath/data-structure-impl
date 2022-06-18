// implementation of a single linked list
class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
    }

}

class SingleLinkedList {

    head = null;
    size = 0;

    add(item) {
        const node = new Node(item);
        let nextNode = this.head;

        if (nextNode === null) {
            this.head = node;
            this.size = this.size + 1;
            return;
        }

        while (nextNode.next) {
            nextNode = nextNode.next;
        }

        nextNode.next = node;
        this.size = this.size + 1;
    }

    get(index) {
        let counter = 0;
        let targetNode = this.head;

        while(counter < index) {
            targetNode = targetNode.next;
            counter++;
        }
        return targetNode;
    }

    addToIndex(item, index) {
        if (index < 0 || index >= this.size) {
            console.error('Invalid index');
            return false;
        }

        const newNode = new Node(item);

        if (index === 0) {
            const temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            return true;
        }

        const targetNode = this.get(index);
        const previousNode = this.get(index-1);

        previousNode.next = newNode;
        newNode.next = targetNode;

        return true;
    }

    print() {
        let nextNode = this.head;
        while (nextNode) {
            console.log('next node: ', nextNode.value);
            nextNode = nextNode.next;
        }
    }
}

const list = new SingleLinkedList();
list.addToIndex(999, 0);
list.add(1);
list.add(2);
list.add(3);
list.add(5);
list.print();
console.log('----------------------------');
list.addToIndex(4, 3);
list.print();
console.log('----------------------------');
list.addToIndex(0, -1);
list.print();
