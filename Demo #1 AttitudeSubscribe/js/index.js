//Creamos un nuevo dispositivo
var device = new tramontana();

var xPos = 56;
var yPos = 50;
var maxD = 350;

function setup() {
    createCanvas(400, 400);

    //Cambiar por la ip mostrada en la app de su dispositivo
    device.start("192.168.43.233", function (e) {
        if (e == undefined) {
            console.log('success');
            device.makeVibrate();
            device.subscribeAttitude(5, function (ip, e) {

                //Conversion de angulos eulerianos a coordenadas (x , y)
                xPos = (Math.cos(e['p']) * Math.sin(e['r'])) * 500 // x = cos(pitch)*sen(roll)
                yPos = Math.sin(e['p']) * 1000; // y = sen(pitch)
                console.log(e);
            });
        }
    });
}

function draw() {
    background(220);
    smooth();
    ellipse(xPos, yPos, 50, 50);
}