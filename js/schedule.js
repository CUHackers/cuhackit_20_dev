/*
* @Author: Charlie Gallentine
* @Date:   2019-09-09 12:50:34
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-09-09 19:17:46
*/

var schedule_item_names = document.getElementsByClassName("schedule-item-name");

for (var i = 0; i < schedule_item_names.length; i++) {
	schedule_item_names[i].addEventListener("click", function() {
		for (var j = 0; j < schedule_item_names.length; j++)
		{
			// Things that close
			if (
				schedule_item_names[j].parentElement.parentElement.classList.contains("schedule-item-open") 
				|| event.target.innerHTML != schedule_item_names[j].innerHTML
			) {
				schedule_item_names[j].parentElement.parentElement.classList.remove("schedule-item-open");

				schedule_item_names[j].parentElement.nextElementSibling.classList.remove("block");
				schedule_item_names[j].parentElement.nextElementSibling.classList.add("none");

				schedule_item_names[j].nextElementSibling.nextElementSibling.classList.remove("schedule-item-marker-open");
				schedule_item_names[j].nextElementSibling.nextElementSibling.classList.add("schedule-item-marker-collapsed");

				schedule_item_names[j].nextElementSibling.classList.add("schedule-item-line");
				schedule_item_names[j].nextElementSibling.classList.remove("schedule-item-line-open");

				schedule_item_names[j].nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("plan-time-pad-open");

				if (j % 2 == 1)
				{
					schedule_item_names[j].parentElement.parentElement.classList.add("schedule-item-collapsed-short");
				}
				else
				{
					schedule_item_names[j].parentElement.parentElement.classList.add("schedule-item-collapsed-long");
				}
			}
			// Things that open
			else
			{
				schedule_item_names[j].parentElement.parentElement.classList.remove("schedule-item-collapsed-short");
				schedule_item_names[j].parentElement.parentElement.classList.remove("schedule-item-collapsed-long");
				schedule_item_names[j].parentElement.parentElement.classList.add("schedule-item-open");
				
				schedule_item_names[j].parentElement.nextElementSibling.classList.add("block");
				schedule_item_names[j].parentElement.nextElementSibling.classList.remove("none");

				schedule_item_names[j].nextElementSibling.nextElementSibling.classList.add("schedule-item-marker-open");
				schedule_item_names[j].nextElementSibling.nextElementSibling.classList.remove("schedule-item-marker-collapsed");			

				schedule_item_names[j].nextElementSibling.classList.remove("schedule-item-line");
				schedule_item_names[j].nextElementSibling.classList.add("schedule-item-line-open");	
	
				schedule_item_names[j].nextElementSibling.nextElementSibling.nextElementSibling.classList.add("plan-time-pad-open");

			}
		}
	});
}