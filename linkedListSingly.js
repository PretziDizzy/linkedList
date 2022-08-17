class Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
    }
}

class singlyLinkedList {
  constructor() {
        this.head 
    }
    setHead(data) {
        //check to see if there is an existing head
        if(!this.head) {
            this.head = new Node(data)
            return this.head
        } else {
            //redefine the head and the references
            let tempHead = this.head
            //set the new head
            this.head = new Node(data)
            //define the new heads next reference to the oldhead
            this.head.next = tempHead
            return this.head
        }
    }
    addNode(data) {
        //we start at the beginning of the LL
       let currentNode = this.head
       //create a condition to check if we are at the end
       while(currentNode.next !== null) {
            currentNode = currentNode.next
       }
       currentNode.next = new Node(data)
       return
    }
    //create a function that console logs every node

    //create a function that returns the tail(last node)
}

//we want to see what the SLL looks like
const sLL = new SinglyLinkedList()
sLL.setHead('Irene')
sLL.addNode('Yannick')
sLL.addNode('Mark')
sLL.setHead('Anuja')




console.log(sLL)
