debugger
class Snake{
	
	constructor(){
		this.body=new Array()
		this.fx=39
		this.body.push([0,9])
		this.body.push([1,9])
		this.body.push([2,9])
		this.body.push([3,9])
		this.body.push([4,9])
		this.body.push([5,9])
		this.body.push([6,9])
    }
	input(key){
		this.fx=key
		
	}
	move(a){
		this.body.pop()
		var head=this.body[0]
		var newHead=new Array()
		if(this.fx==39){
			newHead[0]=head[0]+1
			newHead[1]=head[1]
		}else if(this.fx==38){
			newHead[0]=head[0]
			newHead[1]=head[1]-1
		}else if(this.fx==40){
			newHead[0]=head[0]
			newHead[1]=head[1]+1
		}else if(this.fx==37){
			newHead[0]=head[0]-1
			newHead[1]=head[1]
		}
		
		this.body.splice(0,0,newHead)
		
		
	}
	show(){
		var map=window.map
		var cxt=window.cxt
		for(let i=0;i<this.body.length;i++){			
			cxt.fillStyle="#FFB6C1";
			cxt.fillRect(window.num2Page(this.body[i][0]),window.num2Page(this.body[i][1]),window.smallSize-1,window.smallSize-2);	
		}
		
	}	
}
var smallSize=20
var c=document.getElementById("board");
var cxt=c.getContext("2d");
var snake=new Snake();
document.onkeydown=function(event){
	snake.input(event.keyCode)
	
}
var inervalId = setInterval(function(){rePaintBoard(1/16)}, 16);
var inervalId = setInterval(()=>{snake.move(1)}, 500);

function rePaintBoard(a){
	cxt.clearRect(0, 0, 400, 400);
	snake.show()
	
  
}
function num2Page(x){
	return x*smallSize	
}


