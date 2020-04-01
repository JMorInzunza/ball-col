let balls=new Array()
let ball

function setup() {
	createCanvas(windowWidth, windowHeight);	
}

function draw() {
	background("white")
	if(balls!=null)
	{
		for(let i=0;i<balls.length;i++)
		{
			balls[i].draw();
			balls[i].col()
		}
	}
}

function mouseClicked()
{
	ball=new ballb(mouseX,mouseY,50,color(255,0,255));
	balls.push(ball);

	for(let i=0;i<balls.length;i++)
	{
		balls[i].aux=i;
		balls[i].arr=balls;
	}
}

