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

    print() {
        let nextNode = this.head;
        while (nextNode) {
            console.log('next node: ', nextNode.value);
            nextNode = nextNode.next;
        }
    }
}

const list = new SingleLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print();
