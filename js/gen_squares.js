/*
* @Author: Charlie Gallentine
* @Date:   2019-0910 14:11:26
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-09-15 17:47:17
*/

section = document.getElementById('squares-top');
section.innerHTML = generate_squares_top();


section2 = document.getElementById('squares-about');
section2.innerHTML = generate_squares_about();

section3 = document.getElementById('squares-bottom');
section3.innerHTML = generate_squares_bottom();


function generate_squares_bottom()
{
	var html = "";

	html += gen_square('w',147, 61, .75, 4163, 1156, 1, false);
	html += gen_square('w',25, 26, .5, 4238, 1303, 1, false);
	html += gen_square('w',188, 103, .75, 4224, 1056, 1, false);
	html += gen_square('w',147, 61, .75, 4163, 1156, 1, false);
	html += gen_square('w',224, 164, .75, 4256, 964, 1, false);
	html += gen_square('w',197, 85, .5, 4382, 783, 1, false);
	html += gen_square('w',63, 63, .25, 4448, 722, 1, false);
	html += gen_square('w',85, 50, .75, 4422, 558, 1, false);
	html += gen_square('w',201, 99, .5, 4506, 300, 1, false);
	html += gen_square('w',133, 92, .75, 4550, 264, 1, false);
	html += gen_square('w',67, 67, .5, 4656, 256, 1, false);
	html += gen_square('w',160, 84, .75, 4572, 104, 1, false);
	html += gen_square('w',108, 108, .75, 4615, 93, 1, false);
	html += gen_square('w',30, 30, .75, 4768, 122, 1, false);
	html += gen_square('w',104, 110, .75, 4668, 0, 1, false);

	return html;
}

function generate_squares_about()
{
	var html = "";

	html += gen_square('b',18, 18, 0.4, 476, 50, 1, false);
	html += gen_square('r',39, 39, 0.4, 515, 11, 1, false);
	html += gen_square('b',34, 54, 0.4, 576, 0, 1, false);
	html += gen_square('p',86, 42, 0.4, 606, 11, 1, false);
	html += gen_square('b',80, 21, 0.4, 0, 459, 1, false);
	html += gen_square('b',200, 124, 0.25, 721, 0, 1, false);
	html += gen_square('w',25, 26, 0.5, 976, 42, 1, false);
	html += gen_square('r',75, 105, 0.4, 575, 67, 1, false);
	html += gen_square('r',136, 63, 0.4, 654, 43, 1, false);
	html += gen_square('w',147, 61, 0.75, 892, 67, 1, false);
	html += gen_square('p',35, 35, 0.4, 627, 117, 1, false);
	html += gen_square('p',230, 116, 0.5, 677, 106, 1, false);
	html += gen_square('b',249, 136, 0.25, 826, 126, 1, false);
	html += gen_square('w',188, 103, 0.75, 953, 126, 1, false);
	html += gen_square('r',265, 153, 0.5, 705, 229, 1, false);
	html += gen_square('b',56, 55, 0.25, 607, 290, 1, false);
	html += gen_square('b',62, 62, 0.25, 806, 274, 1, false);
	html += gen_square('r',182, 132, 0.25, 898, 179, 1, false);
	html += gen_square('w',224, 164, 0.75, 952, 200, 1, false);
	html += gen_square('p',60, 31, 0.5, 664, 410, 1, false);
	html += gen_square('r',51, 51, 0.25, 847, 390, 1, false);
	html += gen_square('p',156, 94, 0.5, 787, 443, 1, false);
	html += gen_square('b',62, 62, 0.25, 806, 274, 1, false);
	html += gen_square('b',79, 63, 0.25, 930, 415, 1, false);
	html += gen_square('p',102, 57, 0.25, 1017, 443, 1, false);
	html += gen_square('w',197, 85, 0.5, 1078, 390, 1, false);
	html += gen_square('b',194, 139, 0.5, 803, 489, 1, false);
	html += gen_square('r',183, 125, 0.25, 912, 472, 1, false);
	html += gen_square('w',63, 63, 0.25, 1177, 585, 1, false);
	html += gen_square('b',18, 18, 0.25, 749, 663, 1, false);
	html += gen_square('r',52, 52, 0.5, 781, 661, 1, false);
	html += gen_square('r',114, 114, 0.5, 864, 698, 1, false);
	html += gen_square('p',374, 102, 0.4, 957, 587, 1, false);
	html += gen_square('r',57, 57, 0.25, 1094, 705, 1, false);
	html += gen_square('w',85, 50, 0.75, 1151, 727, 1, false);
	html += gen_square('b',140, 103, 0.25, 1008, 733, 1, false);
	html += gen_square('r',64, 64, 0.25, 1108, 841, 1, false);
	html += gen_square('p',162, 93, 0.5, 844, 842, 1, false);
	html += gen_square('r',190, 94, 0.25, 1160, 857, 1, false);
	html += gen_square('w',201, 99, 0.5, 1235, 869, 1, false);
	html += gen_square('r',46, 46, 0.4, 1094, 927, 1, false);
	html += gen_square('b',162, 103, 0.5, 905, 944, 1, false);
	html += gen_square('b',219, 128, 0.4, 1074, 950, 1, false);
	html += gen_square('r',36, 39, 0.25, 822, 1018, 1, false);
	html += gen_square('w',133, 92, 0.75, 1279, 973, 1, false);
	html += gen_square('p',111, 86, 0.4, 1040, 1025, 1, false);
	html += gen_square('b',62, 62, 0.25, 806, 274, 1, false);
	html += gen_square('r',154, 100, 0.4, 961, 1080, 1, false);
	html += gen_square('r',54, 54, 0.25, 1206, 1073, 1, false);
	html += gen_square('w',160, 100, 0.75, 806, 274, 1, false);
	html += gen_square('w',120, 97, 0.75, 1301, 1106, 1, false);
	html += gen_square('b',24, 24, 0.25, 922, 1179, 1, false);
	html += gen_square('p',54, 54, 0.5, 1040, 1207, 1, false);
	html += gen_square('p',37, 37, 0.4, 1125, 1185, 1, false);
	html += gen_square('b',120, 97, 0.25, 1232, 1099, 1, false);
	html += gen_square('r',87, 127, 0.4, 1061, 1237, 1, false);
	html += gen_square('p',100, 49, 0.25, 1147, 1202, 1, false);
	html += gen_square('p',59, 27, 0.25, 1224, 1207, 1, false);
	html += gen_square('w',108, 108, 0.75, 1344, 1169, 1, false);
	html += gen_square('r',18, 18, 0.25, 1028, 1321, 1, false);
	html += gen_square('b',63, 63, 0.4, 1158, 1286, 1, false);
	html += gen_square('r',45, 45, 0.4, 1249, 1301, 1, false);
	html += gen_square('b',16, 16, 0.4, 1291, 1294, 1, false);
	html += gen_square('w',100, 110, 0.75, 1397, 1266, 1, false);

	return html;
}

function generate_squares_top()
{
	var html = "";

	html += gen_square('b',80, 21, 0.4, 0, 459, 1, false);
	html += gen_square('r',81, 19, 0.4, 15, 560, 1, false);
	html += gen_square('p',84, 51, 0.4, 9, 599, 1, false);
	html += gen_square('r',102, 56, 0.5, 77, 656, 1, false);
	html += gen_square('r',89, 52, 0.25, 15, 713, 1, false);
	html += gen_square('p',101, 45, 0.25, 0, 735, 1, false);
	html += gen_square('p',35, 35, 0.5, 133, 758, 1, false);
	html += gen_square('b',79, 111, 0.5, 42, 781, 1, false);
	html += gen_square('r',111, 80, 0.25, 0, 875, 1, false);
	html += gen_square('p',127, 62, 0.4, 60, 812, 1, false);
	html += gen_square('r',115, 56, 0.5, 133, 836, 1, false);
	html += gen_square('p',242, 91, 0.5, 77, 905, 1, false);
	html += gen_square('p',50, 24, 0.25, 0, 1073, 1, false);
	html += gen_square('b',140, 92, 0.4, 41, 1037, 1, false);
	html += gen_square('r',191, 111, 0.25, 0, 1109, 1, false);
	html += gen_square('p',78, 112, 0.25, 77, 1288, 1, false);
	html += gen_square('b',45, 45, 0.5, 214, 1187, 1, false);
	html += gen_square('b',80, 62, 0.4, 199, 1247, 1, false);
	html += gen_square('p',93, 82, 0.4, 210, 1273, 1, false);
	html += gen_square('b',34, 63, 0.4, 261, 1332, 1, false);
	html += gen_square('r',45, 45, 0.4, 302, 1310, 1, false);
	html += gen_square('b',23, 23, 0.25, 365, 1321, 1, false);

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
			width:${w/1366 * 100}%;
			height:${h}px;
			opacity:${o};
			top:${t}px;
			left:${l/1366 * 100}%;
			z-index:${z}">
			</div>`;
	}
		return `<div
		class="square"
		style="
			background-color: ${color};
			width:${w/1366 * 100}%;
			height:${h}px;
			opacity:${o};
			top:${t}px;
			left:${l/1366 * 100}%;
			z-index:${z}">
			</div>`;
}