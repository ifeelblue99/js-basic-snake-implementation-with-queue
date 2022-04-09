const board= [
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0
]

function Snake(){
  this.body = [2, 5, 8]
  
  this.draw = function(){
    this.body.forEach(indx=>{
      board[indx] = "*"
    })
    console.log(board)
  }
  this.move = function(){
    if(this.body[0]+1!=undefined){
      this.body.unshift(this.body[0]+1)
      const tail = this.body.pop()
      board[tail] = 0
    }
    else if(this.body[0]-1!=undefined){
      this.body.unshift(this.body[0]-1)
      const tail = this.body.pop()
      board[tail] = 0
    }
    else if(this.body[0]+4!=undefined){
      this.body.unshift(this.body[0]+4)
      const tail = this.body.pop()
      board[tail] = 0
    }
    else if(this.body[0]-4!=undefined){
      this.body.unshift(this.body[0]-4)
      const tail = this.body.pop()
      board[tail] = 0
    }
    this.draw()
  }
}

const snake = new Snake()
snake.draw()
setInterval(()=>snake.move(), 2000)
