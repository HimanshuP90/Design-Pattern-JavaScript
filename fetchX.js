// // Set up our HTTP request
// var xhr = new XMLHttpRequest();

// // Setup our listener to process completed requests
// xhr.onload = function () {

//     // Process our return data
//     if (xhr.status >= 200 && xhr.status < 300) {
//         // Runs when the request is successful
//         console.log(xhr.responseText);
//     } else {
//         // Runs when it's not
//         console.log(xhr.responseText);
//     }

// };

// // Create and send a GET request 
// // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// // The second argument is the endpoint URL
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// xhr.send();



// Link List

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        // if empty, make node
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head; // then make head as current
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // insert at index
    insertAtIndex(data, index) {
        // if index is out of range
        if (index > 0 && index > this.size) return;

        // if first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;

    }

    // get Nth node in a Linked List
    getIndex(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null;
    }
    // Remove at index
    removeAtIndex(index) {
        if (index > 0 && index > this.size) return;

        let current = this.head;
        let previous;
        let count = 0;

        // remove first;
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;

    }

    deleteLinkList() {
        this.head = null;
    }


    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

const l1 = new LinkedList()
l1.insertFirst(2)
l1.insertFirst(200)
l1.insertFirst(300)
l1.insertLast(400)
// l1.printList()
l1.insertAtIndex(500, 2)
// l1.getIndex(2)
l1.printList()
console.log('--------')
l1.removeAtIndex(1)
l1.printList()
console.log('all cleared')
// l1.deleteLinkList()
// 300 -> 200 -> 2 -> 400 -> null
        // node: 500 -> 2 -> 400 -> null

