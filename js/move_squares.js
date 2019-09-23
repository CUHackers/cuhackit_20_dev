/*
* @Author: Charlie Gallentine
* @Date:   2019-09-23 09:06:19
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-09-23 09:52:43
*/

var moving_squares = document.getElementsByClassName('bordered-square');

for (var i = 0; i < moving_squares.length; i++)
{
	console.log(i);
	setInterval(ellipse, 100, moving_squares[i], 1, 20);
	// console.log(parseInt(moving_squares[i].style.top,10));
	// console.log("Left: %d", moving_squares[i].style.left);
}

function ellipse(square, w, h)
{
	var now = new Date();
	console.log(parseInt(square.style.top,10) + (Math.sin(now.getTime()/10) * h));

	square.style.top = parseInt(square.style.top,10) + (Math.sin(now.getTime()/10) * h) + 'px';
	square.style.left = parseInt(square.style.left,10) + (Math.cos(now.getTime()/10) * w) + '%';
}