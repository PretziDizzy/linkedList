class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
    }
}

class SinglyLinkedList {
  constructor() {
        this.head
        this.tail
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
    printNodes() {
      //we start at the head
      if(!this.head){
          console.log('No nodes in this linked list')
          return
      } else {
          //define our starting point
          let currentNode = this.head
          while(currentNode !== null){
              //print out the node
              console.log(currentNode)
              //we traverse
              currentNode = currentNode.next
          }
      }
      
  }

//////////// Singly LL challenges /////////////

  //create a function that sets the tail(last node)
  setTail(data) {
    //we check to see if there is a head (there exist node(s))
    if(!this.head) {
        this.head = new Node(data)
        this.tail = this.head
    } else {
        //we must traverse until we reach the last node [data: next: null]
        let currentNode = this.head
        while(currentNode.next !== null) {
            currentNode = currentNode.next
        }
        //create a tempTail variable to host the old tail
        let oldTail = currentNode // [data: next: null]
        //redefine the old tail's next pointer to the new tail
        oldTail.next = new Node(data)
        this.tail = oldTail.next
        return
    }
}

//find node
findNode(data) {
    //check to see if there exists a head
    if(!this.head) {
        console.log('No nodes in our Linked List')
        return false
    } else {
        //traverse through our LL
        let currentNode = this.head
        //check to see if we are not at the end
        while(currentNode !== null){
            //check to see if the currentNode.data === data //return true return node
            if(currentNode.data === data) {
                console.log('Node has been found', currentNode)
                return true
            }

            currentNode = currentNode.next
        }   
        //return false
        return false
    }
}

//insertNodeAtIdx
insertNodeAtIdx(idx, data) {
    //we are going to create counter, as we traverse through the list, we are going to increment the counter
    //return the node that matches counter === idx
    //check for the head
    if(!this.head) {
        return false
    }else {
        let counter = 0 // should clarify if the head is 1 or 0
        //starting point
        let currentNode = this.head
        while(counter !== idx) {
            //traverse && increment the counter
            currentNode = currentNode.next
            counter++
        }
        //preserve the currentNode.next node
        let tempCurrNext = currentNode.next
        //redefine the next pointer of currentNode to the newNode
        currentNode.next = new Node(data)
        // redefine the newNode's next to the preservered node 
        let newNode = currentNode.next
        newNode.next = tempCurrNext

    }
}

//deleteNodeAtIdx
deleteNodeAtIdx(idx){
    //check if there are nodes
    const previousIdx = idx -1
    if(!this.head) {
        return false
    } else {
        let counter = 0
        let currentNode = this.head
        while(counter !== previousIdx) {
            currentNode = currentNode.next
            counter++
        }
      console.log (currentNode)
      let nextNode = currentNode.next
      let nextNextNode = nextNode.next

      currentNode.next = nextNextNode
    }
}
}

//////////// CHALLENGE /////////////    
//Prompt: Write a method that determines if the SSl is circular (hint: think of what happens when you draw a circle) //returns a boolean



//we want to see what the SLL looks like
const sLL = new SinglyLinkedList()
sLL.setHead('Irene')
sLL.addNode('Yannick')
sLL.addNode('Mark')
sLL.setHead('Anuja')
sLL.setHead('Yacob')

//Yacob= 0
//Anuja = 1
//Irene = 2
//Yannick = 3
//Mark = 4

sLL.printNodes()
sLL.deleteNodeAtIdx(2)
sLL.printNodes()
