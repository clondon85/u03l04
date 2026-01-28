function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XaRHZAZ9Xl":
        Script1();
        break;
      case "5lhb7KFjCVQ":
        Script2();
        break;
      case "5zqDFI8Wyj8":
        Script3();
        break;
      case "6pYy5eLycsG":
        Script4();
        break;
      case "60cUJpwZhVo":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6CkNxvp5EQt');
const duration = 1500;
const easing = 'ease-out';
const id = '6Kz2fYmXg7V';
const pulseAmount = 0.07;
const delay = 2979;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5lK6YUpEVbM');
const duration = 1500;
const easing = 'ease-out';
const id = '6Iud4h60L4B';
const pulseAmount = 0.07;
const delay = 8000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('5m010zsJTDr');
const duration = 1000;
const easing = 'ease-out';
const id = '6SYepXIRraJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6QxlpHioQLf');
const duration = 1000;
const easing = 'ease-out';
const id = '5eU5Tn596Jb';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6NftrqIeeiJ');
const duration = 1000;
const easing = 'ease-out';
const id = '6Br5V23H4SJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
