/*:
 * @plugindesc v1.00 LiuYue_CustomOCKey 自定义确认取消键
 * @author 流逝的岁月
 *
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 *
 *使用条例：本插件完全免费，随意魔改
 *
 *
 *
 * 这个插件可以修改默认的Z,X键位 上下左右键位
 *
 * 注意 如果设置箭头需要用 Left(左) Up(上) Right(右) Down(下)来代替
 * 字母键位需要用大写英文字母来代替
 *
 *
 *最好设置的按键防止与原键码冲突
 // Input.keyMapper = {
    // 9: 'tab',       // tab
    // 13: 'ok',       // enter
    // 16: 'shift',    // shift
    // 17: 'control',  // control
    // 18: 'control',  // alt
    // 27: 'escape',   // escape
    // 32: 'ok',       // space
    // 33: 'pageup',   // pageup
    // 34: 'pagedown', // pagedown
    // 37: 'left',     // left arrow
    // 38: 'up',       // up arrow
    // 39: 'right',    // right arrow
    // 40: 'down',     // down arrow
    // 45: 'escape',   // insert
    // 81: 'pageup',   // Q
    // 87: 'pagedown', // W
    // 88: 'escape',   // X
    // 90: 'ok',       // Z
    // 96: 'escape',   // numpad 0
    // 98: 'down',     // numpad 2
    // 100: 'left',    // numpad 4
    // 102: 'right',   // numpad 6
    // 104: 'up',      // numpad 8
    // 120: 'debug'    // F9
// };
 *
 *
 *
 *
 *-------------------------------------------------------------------
 *
 *使用条例：本插件完全免费，随意魔改
 * 
 *-------------------------------------------------------------------
 *
 *我叫坂本v1.00: 完成插件
 *------------------------------------------------------------------------
 *
 *
 *
 * @param ---设置---
 * @default
 *
 * @param Ok
 * @text 确认键
 * @parent ---设置---
 * @desc 对应游戏中的默认键OK
 * @default Z
 *
 * @param Cancel
 * @text 取消键
 * @parent ---设置---
 * @desc 对应游戏中的默认键Escape
 * @default X
 *
 * @param Left
 * @text 左移动键
 * @parent ---设置---
 * @desc 对应游戏中的默认键Left arrow
 * @default Left
 *
 * @param Right
 * @text 右移动键
 * @parent ---设置---
 * @desc 对应游戏中的默认键Right arrow
 * @default Right
 *
 * @param Up
 * @text 上移动键
 * @parent ---设置---
 * @desc 对应游戏中的默认键Up arrow
 * @default Up
 *
 * @param Down
 * @text 下移动键
 * @parent ---设置---
 * @desc 对应游戏中的默认键Down arrow
 * @default Down
 *
 *
 * @param IsClearZXKey
 * @parent ---Zzy BkSet---
 * @text 是否关闭原版按键
 * @type boolean
 * @on YES
 * @off NO
 * @desc 这可能会造成某些问题,但我还不知道是什么问题
 * YES - true     NO - false
 * @default true
 *
 *
 */
  
var LiuYue = LiuYue || {};
LiuYue.LiuYue_CustomOCKey = true;//插件启动 

var Zzy = Zzy || {};
Zzy.COCK = Zzy.COCK || {};
Zzy.COCK.version = 1.00;  
Zzy.Parameters = PluginManager.parameters('LiuYue_CustomOCKey');
Zzy.Param = Zzy.Param || {};



Zzy.Param.COCKKeyOk = String(Zzy.Parameters['Ok']);//Ok
Zzy.Param.COCKKeyCancel = String(Zzy.Parameters['Cancel']);//Cancel
Zzy.Param.COCKKeyLeft = String(Zzy.Parameters['Left']);//Left
Zzy.Param.COCKKeyRight = String(Zzy.Parameters['Right']);//Right
Zzy.Param.COCKKeyUp = String(Zzy.Parameters['Up']);//Up
Zzy.Param.COCKKeyDown = String(Zzy.Parameters['Down']);//Down

Zzy.Param.COCKIsClearZXKey = eval(String(Zzy.Parameters['IsClearZXKey']));

Zzy.COCK.ClearKey = function()
{
	if(Zzy.Param.COCKIsClearZXKey)
	{
		Input.keyMapper[88] = undefined;
		Input.keyMapper[90] = undefined;
		Input.keyMapper[37] = undefined;
		Input.keyMapper[38] = undefined;	
		Input.keyMapper[39] = undefined;
		Input.keyMapper[40] = undefined;
	}
}
Zzy.COCK.ClearKey();


Zzy.Param.COCKKeyArr = [
Zzy.Param.COCKKeyOk,Zzy.Param.COCKKeyCancel,Zzy.Param.COCKKeyLeft,Zzy.Param.COCKKeyRight,Zzy.Param.COCKKeyUp,Zzy.Param.COCKKeyDown
];

Zzy.Param.COCKKeyCode = ['ok','escape','left','right','up','down'];

Zzy.COCK.AddKey = function()//添加键码
{
	for(var i=0;i<Zzy.Param.COCKKeyArr.length;i++)
	{
		var CC = Zzy.Param.COCKKeyArr[i];
		if(CC.length > 1)
		{
			switch(CC)
			{
				case 'LEFT':case 'Left':case 'left':Input.keyMapper[37] = Zzy.Param.COCKKeyCode[i];continue;
				case 'RIGHT':case 'Right':case 'right':Input.keyMapper[39] = Zzy.Param.COCKKeyCode[i];continue;
				case 'UP':case 'Up':case 'up':Input.keyMapper[38] = Zzy.Param.COCKKeyCode[i];continue;
				case 'DOWN':case 'Down':case 'down':Input.keyMapper[40] = Zzy.Param.COCKKeyCode[i];continue; 
				default:
				console.log('一个错误(来自LiuYue_CustomOCKey.js):输入的字符不是有效的!');continue;
			}
		}
		else
		{
			CC = CC.toUpperCase();//切换为大写字母
			var ASCII = CC.charCodeAt();	
		    if(ASCII > 0 && ASCII < 256)
		    {
			    Input.keyMapper[ASCII] = Zzy.Param.COCKKeyCode[i];
		    }			
		}
	}
}
Zzy.COCK.AddKey();
