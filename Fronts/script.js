// create a node class
class Node {
    constructor(data){
        this.data =  data;
        this.next = null;
    }
}

// create a Linked List class
class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        // create a new node instance
        let newNode = new Node(value);
        // check first to see if the Linked List is currently empty
        // if it is, make that new node you just created the head node.
        if (this.head == null) {
            this.head = newNode;
            return this;
        }
        // if the linked list is not currently empty, then go here...
        // remember, a node has 2 attrs, data and next.
        newNode.next = this.head;
        // this line above is saying "make this node point to the current head node
        // so that we stay connected to the nodes after this new one after making this
        // new one the head node. If not, your list behind the new head node will be severed."
        this.head = newNode;
        // now that you have given the node that was just the head a pointer/reference
        // so that it doesnt get lost in line, you can now make the new node you are
        // creating the new head node.

        // ORDER MATTERS! You must give the current head a pointer before
        // you reassign the new node to become the new head node.

        return this; // this is referring to the entire LL that you are working on
    };
    // write a method that removes the head node and return the new list head node
    removeFront() {
        if (this.head == null){
            return null;
        }
        // create a new variable to store the removed node
        let removedNode = this.head;
        console.log("REMOVED NODE: ", removedNode)
        // now say you want the node AFTER the current head node to become the new head node.
        this.head = removedNode.next; // this moves the 2nd node to the front of the list
        console.log("THE REMOVED NODES NEXT VALUE: ", this.head)
        removedNode.next = null // this makes the node that just was the head node go away into limbo
        console.log("REMOVED NODE AFTER REASSIGNMENT/REMOVAL: ", removedNode.next)
        console.log("NEW HEAD NODE AFTER FUNCTION COMPLETED RUNNING: ", this.head)
        return this.head
        // this returns the new head node, which is now the node that was 2nd when we started this function
    }

    // write a method that returns the value (not the node) at the head of the list,
    // if empty, return null
    front(){
        if (this.head == null){
            return null
        }
        // create a variable to store the VALUE of the head node
        let headNodeValue = this.head.data;
        // the line above is saying, "this" (meaning the LL you are calling this method on) has
        // a head node, go into that head node, and find what that nodes data is, and assign
        // that data to be the value of the variable headNodeValue. Easy as 1-2-3 :)
        console.log("HEAD NODES CURRENT VALUE: ", headNodeValue);

        return headNodeValue;
    }
}

// testing it out
let testLL = new SLL()
console.log(testLL)

testLL.addFront("A")
console.log(testLL)

testLL.addFront("B")
console.log(testLL)

testLL.addFront("C")
console.log(testLL)

testLL.removeFront()
console.log("AFTER CALLING REMOVE-FRONT ONCE: ", testLL)

testLL.front()
console.log("LINKED LIST AFTER CALLING FRONT: ", testLL)
