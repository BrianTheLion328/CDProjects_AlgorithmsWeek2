// create a node class
class Node {
    constructor(data){
        this.data = data;
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
    };

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
    };

    findSum() {
        if (this.head == null){
            return null;
        }
        // first start at the front of the linked list
        let runner = this.head;
        let sum = 0;

        // since a linked list doesnt know how many nodes is within it,
        // we will use a WHILE LOOP, not a FOR LOOP.
        // Tell the loop when to stop, we know a LL ends at null, so stop at null
        while(runner !== null) {
            sum += runner.data;
            // tell the loop to move on to the next node
            runner = runner.next
        }
        console.log(sum)
        return sum;
    };
// CONTAINS
    contains(value) {
        if (this.head == null){
            return null;
        }
        let runner = this.head;
        console.log("CONTAINS RUNNER: ", runner)

        while(runner !== null){
            if (runner.data == value){
                return true
            }
            runner = runner.next
            console.log("CONTAIN METHOD RUNNER.DATA ", runner)
        }
        return false;
    };
// LENGTH
    length() {
        if (this.head == null) {
            return null
        }
        let runner = this.head;
        let count = 0;

        while (runner !== null) {
            count++
            runner = runner.next
        }
        console.log("THE LENGTH OF THE ARRAY IS: ", count)
        return count
    };

// DISPLAY
    display() {
        let stringValues = "";
        if (this.head == null) {
            return null;
        }
        stringValues += this.head.data;
        let runner = this.head.next;

        while (runner != null){
            stringValues += ", " + runner.data;
            runner = runner.next
        }
        console.log("LIST OF VALUES: ", stringValues)
        return stringValues
    }
}

let brianSLL = new SLL();

brianSLL.addFront(1).addFront(2).addFront(3).addFront("Brian").addFront(true)
console.log(brianSLL)

// display length
brianSLL.length()

// display all the node's individual values
brianSLL.display()
console.log(brianSLL.display())
