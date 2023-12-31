﻿ /*:
 * @plugindesc WASD移动
 * @author ddike
 * @help
 原键码参考：
  Input.keyMapper = {
     9: 'tab',        tab
     13: 'ok',        enter
     16: 'shift',     shift
     17: 'control',   control
     18: 'control',   alt
     27: 'escape',    escape
     32: 'ok',        space
     33: 'pageup',    pageup
     34: 'pagedown',  pagedown
     37: 'left',      left arrow
     38: 'up',        up arrow
     39: 'right',     right arrow
     40: 'down',      down arrow
     45: 'escape',    insert
     81: 'pageup',    Q
     87: 'pagedown',  W
     88: 'escape',    X
     90: 'ok',        Z
     96: 'escape',    numpad 0
     98: 'down',      numpad 2
     100: 'left',     numpad 4
     102: 'right',    numpad 6
     104: 'up',       numpad 8
     120: 'debug'     F9
 };
*/
var WasdMove = WasdMove || {};

WasdMove.AddKey = function()
{
	Input.keyMapper[87] = 'up';
	Input.keyMapper[65] = 'left';
	Input.keyMapper[83] = 'down';
	Input.keyMapper[68] = 'right';
}
WasdMove.AddKey();
