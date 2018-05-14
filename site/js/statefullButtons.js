/* Script by: www.jilanov.com
 * Version: 1.12 (20120823)
 * Latest version: https://github.com/DJilanov/Statefull_Butttons
 *
 * License:
 * GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 */

 setState = function(obj, state)
 {
 	x = obj.children();
 	//reset their status so there wont be dublicated classes
 	$(obj.children()).removeClass("hide hidden")
 	$(obj.children()).addClass("hide hidden"); //there is difference between bootstrap 2 and 3 so hide is for 2 and hidden for 3!

 	//looking for their data-status so it can show the one we want
 	for(var counter = 0; counter < x.length; counter++)
 	{
 		obj.removeClass($(obj.children()[counter]).data('state'));
 		if($(obj.children()[counter]).data('state')==state)
 		{
 			$(obj.children()[counter]).removeClass("hide hidden");
 			obj.addClass($(obj.children()[counter]).data('state'));
 		}
 	}

 }