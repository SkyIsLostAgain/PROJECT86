var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        birthdayimg = Img;
        birthdayimg.scaleToWidth(700);
        birthdayimg.scaleToHeight(510);
        birthdayimg.set({
            top:0,
            left:0
        
        });
        canvas.add(birthdayimg)
    });
	
}

function playSound(){
	x.play();
}
