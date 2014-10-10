$(document).ready(function(){

 var imgArr = new Array( // relative paths of images
   '/back6.jpg',
   '/back2.jpg',
   '/back3.jpg',
   '/back4.jpg'
   );
 
 var preloadArr = new Array();
 var i;
 
 /* preload images */
 for(i=0; i < imgArr.length; i++){
   preloadArr[i] = new Image();
   preloadArr[i].src = imgArr[i];
 }
 
 var currImg = 1;
 var intID = setInterval(changeImg, 150000);
 
 /* image rotator */
 function changeImg(){
  $('#back-image').fadeOut('slow', 'linear', function(){
    $(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src +') center center');
    $(this).css('background-size', 'cover');
  });
  $('#back-image').fadeIn('slow');
 }
 
});