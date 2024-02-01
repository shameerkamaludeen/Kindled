// Youtube iframe api script adding for create player object and to control the 
// video
// Isolated this initialization to modulize so can create multiple player object 
// based on multiple iframe tag in the website 

(function () {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}());