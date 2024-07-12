(function(){
	let canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		namesPosition = -50,
		scrollUp = setInterval(function(){
			namesPosition-= 1;
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.beginPath();
			context.fillStyle = '#888';
			context.fillRect(0,0,canvas.width,canvas.height);
			context.closePath();

			context.beginPath();
			context.shadowColor = '#000';
			context.shadowBlur = 5;
			context.shadowOffsetX = 3;
			context.shadowOffsetY = 3;
			context.font = "bold 20px arial";
			context.fillStyle = '#fff';
			context.fillText('# Front End Guild #',100,200+namesPosition);
			context.fillText('Deepak Chokkadi',100,230+namesPosition);
			context.fillText('Craig Lucas',100,260+namesPosition);
			context.fillText('Justin Lucente',100,290+namesPosition);
			context.fillText('Lakshmi Munukutla',100,320+namesPosition);
			context.fillText('Luis Velez',100,350+namesPosition);
			context.fillText('Meghan Bridges',100,380+namesPosition);
			context.fillText('Norman Daley',100,410+namesPosition);
			context.fillText('Rhema Meshramkar',100,440+namesPosition);
			context.fillText('Richard Dillman',100,470+namesPosition);
			context.fillText('Ruben Guzman',100,500+namesPosition);
			context.fillText('Scott Johnson',100,530+namesPosition);
			context.fillText('Juhi Mehta',100,560+namesPosition);
			context.fillText('Swati Gaikwad',100,590+namesPosition);
			context.fillText('Justin Gatlin',100,620+namesPosition);
			context.fillText('Richard Kichenama',100,650+namesPosition);
			context.closePath();
			if(namesPosition <= -680){
				clearInterval(scrollUp);
			}
		},62);
})();