/*
* @Author: Charlie Gallentine
* @Date:   2019-09-10 14:11:26
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-09-10 15:26:02
*/

section = document.getElementById('squares-top');

section.innerHTML += generate_squares_top();

function generate_squares_top()
{
	var html = "";

	html += gen_square('b',80, 21, 0.4, 0, 459, -1, false);
	html += gen_square('r',81, 19, 0.4, 15, 560, -1, false);
	html += gen_square('p',84, 51, 0.4, 9, 599, -1, false);
	html += gen_square('r',102, 56, 0.5, 77, 656, -1, false);
	html += gen_square('r',89, 52, 0.25, 15, 713, -1, false);
	html += gen_square('p',101, 45, 0.25, 0, 735, -1, false);
	html += gen_square('p',35, 35, 0.5, 133, 758, -1, true);
	html += gen_square('b',79, 111, 0.5, 42, 781, -1, false);
	html += gen_square('r',111, 80, 0.25, 0, 875, -1, false);
	html += gen_square('p',127, 62, 0.4, 60, 812, -1, false);
	html += gen_square('r',115, 56, 0.5, 133, 836, -1, false);
	html += gen_square('p',242, 91, 0.5, 77, 905, -1, true);
	html += gen_square('p',50, 24, 0.25, 0, 1073, -1, false);
	html += gen_square('b',140, 92, 0.4, 41, 1037, -1, false);
	html += gen_square('r',191, 111, 0.25, 0, 1109, -1, false);
	html += gen_square('p',78, 112, 0.25, 77, 1288, -1, false);
	html += gen_square('b',45, 45, 0.5, 214, 1187, -1, true);
	html += gen_square('b',80, 62, 0.4, 199, 1247, -1, false);
	html += gen_square('p',93, 82, 0.4, 210, 1273, -1, false);
	html += gen_square('b',34, 63, 0.4, 261, 1332, -1, false);
	html += gen_square('r',45, 45, 0.4, 302, 1310, -1, true);
	html += gen_square('b',23, 23, 0.25, 365, 1321, -1, false);

	return html;
}


function gen_square(c, w, h, o, t, l, z, b)
{
	var color = (c==='r' ? "#e70000" : c==='b' ? "#0016ff" : c==='p' ? "#711ed6": "#ffffff");
	if (b)
	{
		return `<div
		class="square bordered-square"
		style="
			background-color: ${color};
			width:${w/1366 * 100}vw;
			height:${h}px;
			opacity:${o};
			top:${t}px;
			left:${l/1366 * 100}vw;
			z-index:${z}">
			</div>`
	}
			return `<div
		class="square"
		style="
			background-color: ${color};
			width:${w/1366 * 100}vw;
			height:${h}px;
			opacity:${o};
			top:${t}px;
			left:${l/1366 * 100}vw;
			z-index:${z}">
			</div>`
}