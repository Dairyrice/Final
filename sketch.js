let array = [];
let noiseOffset = 0.0;
let strokeWidth = 3;
let l;
let sel;
let am;
let sp;
let fr;
let ch;
let vi;
let jp;
let kr;
let ge;
let ru;
let po;
let fi;
let a_sound;
let s_sound;
let f_sound;
let c_sound;
let v_sound;
let j_sound;
let k_sound;
let d_sound;
let r_sound;
let p_sound;
let ph_sound;
let languages = [{name: "Thank you"},
                  {name: "Gracias"},
                  {name: "Merci"},
                  {name: "谢谢"},
                  {name: "Cảm ơn"},
                  {name: "ありがとう"},
                  {name: "감사합니다"},
                  {name: "Danke"},
                  {name: "Спасибо"},
                  {name: "Obrigada"},
                  {name: "Salamat"},];

let greetings = [{name: "Hello"},
                  {name: "Hola"},
                  {name: "Bonjour"},
                  {name: "你好"},
                  {name: "Chào"},
                  {name: "こんにちは"},
                  {name: "안녕하세요"},
                  {name: "Hallo"},
                  {name: "Привет"},
                  {name: "Olá"},
                  {name: "Kamusta"},];

let cheer = [{name: "Cheers!"},
              {name: "Salud!"},
              {name: "Saunte"},
              {name: "干杯"},
              {name: "Dzô"},
              {name: "乾杯"},
              {name: "건배"},
              {name: "Prost"},
              {name: "За здоровье"},
              {name: "Saúde"},
              {name: "tagay"},];

function preload(){
soundFormats('mp3', 'ogg');
a_sound = loadSound('assets/Sound_1');
s_sound = loadSound('assets/Sound_2');
f_sound = loadSound('assets/Sound_3');
c_sound = loadSound('assets/Sound_4');
v_sound = loadSound('assets/Sound_5');
j_sound = loadSound('assets/Sound_6');
k_sound = loadSound('assets/Sound_7');
d_sound = loadSound('assets/Sound_8');
r_sound = loadSound('assets/Sound_9');
p_sound = loadSound('assets/Sound_10');
ph_sound = loadSound('assets/Sound_11');


}
function setup() {
  am = loadImage('assets/flag_1.png');
  sp = loadImage('assets/flag_2.png');
  fr = loadImage('assets/flag_3.png');
  ch = loadImage('assets/flag_4.png');
  vi = loadImage('assets/flag_5.png');
  jp = loadImage('assets/flag_6.png');
  kr = loadImage('assets/flag_7.png');
  ge = loadImage('assets/flag_8.png');
  ru = loadImage('assets/flag_9.png');
  po = loadImage('assets/flag_10.png');
  fi = loadImage('assets/flag_11.png');

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  sel = createSelect();
  sel.position(CENTER);
  sel.option('English');
  sel.option('Spanish');
  sel.option('French');
  sel.option('Chinese');
  sel.option('Vietnamese');
  sel.option('Japanese');
  sel.option('Korean');
  sel.option('German');
  sel.option('Russian');
  sel.option('Portuguese');
  sel.option('Filipino');
  sel.changed(mySelectEvent);

rect(windowWidth/9, windowHeight/3, 1500, 600);


}

function draw() {

  fillColor = 255;
  strokeWeight(3);
  textSize(30);

  // mySelectEvent();
  if (mouseIsPressed){

 line(mouseX, mouseY, pmouseX, pmouseY);
}

}


function mySelectEvent(){
let item = sel.value();

if (item === 'English'){
background(am);
rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[0].name}`, 1500, 400);
text(`${greetings[0].name}`, 1500, 500);
text(`${cheer[0].name}`, 1500, 600);
a_sound.play();
s_sound.pause();
f_sound.pause();
c_sound.pause();
v_sound.pause();
j_sound.pause();
k_sound.pause();
d_sound.pause();
r_sound.pause();
p_sound.pause();
ph_sound.pause();
}
else if (item === 'Spanish'){
background(sp);
rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[1].name}`, 1500, 400);
text(`${greetings[1].name}`, 1500, 500);
text(`${cheer[1].name}`, 1500, 600);
a_sound.pause();
s_sound.play();
f_sound.pause();
c_sound.pause();
v_sound.pause();
j_sound.pause();
k_sound.pause();
d_sound.pause();
r_sound.pause();
p_sound.pause();
ph_sound.pause();
}
else if (item === 'French'){
  background(fr);
  rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[2].name}`, 1500, 400);
text(`${greetings[2].name}`, 1500, 500);
text(`${cheer[2].name}`, 1500, 600);
a_sound.pause();
s_sound.pause();
f_sound.play();
c_sound.pause();
v_sound.pause();
j_sound.pause();
k_sound.pause();
d_sound.pause();
r_sound.pause();
p_sound.pause();
ph_sound.pause();
}
else if (item === 'Chinese'){
  background(ch);
  rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[3].name}`, 1500, 400);
text(`${greetings[3].name}`, 1500, 500);
text(`${cheer[3].name}`, 1500, 600);
a_sound.pause();
s_sound.pause();
f_sound.pause();
c_sound.play();
v_sound.pause();
j_sound.pause();
k_sound.pause();
d_sound.pause();
r_sound.pause();
p_sound.pause();
ph_sound.pause();
}
else if (item === 'Vietnamese'){
  background(vi);
  rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[4].name}`, 1500, 400);
text(`${greetings[4].name}`, 1500, 500);
text(`${cheer[4].name}`, 1500, 600);
a_sound.pause();
s_sound.pause();
f_sound.pause();
c_sound.pause();
v_sound.play();
j_sound.pause();
k_sound.pause();
d_sound.pause();
r_sound.pause();
p_sound.pause();
ph_sound.pause();
}
else if (item === 'Japanese'){
  background(jp);
  rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[5].name}`, 1500, 400);
text(`${greetings[5].name}`, 1500, 500);
text(`${cheer[5].name}`, 1500, 600);
a_sound.pause();
s_sound.pause();
f_sound.pause();
c_sound.pause();
v_sound.pause();
j_sound.play();
k_sound.pause();
d_sound.pause();
r_sound.pause();
p_sound.pause();
ph_sound.pause();
}
else if (item === 'Korean'){
  background(kr);
  rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[6].name}`, 1500, 400);
text(`${greetings[6].name}`, 1500, 500);
text(`${cheer[6].name}`, 1500, 600);
a_sound.pause();
s_sound.pause();
f_sound.pause();
c_sound.pause();
v_sound.pause();
j_sound.pause();
k_sound.play();
d_sound.pause();
r_sound.pause();
p_sound.pause();
ph_sound.pause();
}
else if (item === 'German'){

  background(ge);
  rect(windowWidth/9, windowHeight/3, 1500, 600);
  rect(700, 10, 500, 300);
text(`${languages[7].name}`, 1500, 400);
text(`${greetings[7].name}`, 1500, 500);
text(`${cheer[7].name}`, 1500, 600);
a_sound.pause();
s_sound.pause();
f_sound.pause();
c_sound.pause();
v_sound.pause();
j_sound.pause();
k_sound.pause();
d_sound.play();
r_sound.pause();
p_sound.pause();
ph_sound.pause();
}
else if (item === 'Russian'){
  background(ru);
  rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[8].name}`,1500, 400);
text(`${greetings[8].name}`, 1500, 500);
text(`${cheer[8].name}`, 1500, 600);
a_sound.pause();
s_sound.pause();
f_sound.pause();
c_sound.pause();
v_sound.pause();
j_sound.pause();
k_sound.pause();
d_sound.pause();
r_sound.play();
p_sound.pause();
ph_sound.pause();
}
else if (item === 'Portuguese'){
  background(po);
  rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[9].name}`, 1500, 400);
text(`${greetings[9].name}`, 1500, 500);
text(`${cheer[9].name}`, 1500, 600);
a_sound.pause();
s_sound.pause();
f_sound.pause();
c_sound.pause();
v_sound.pause();
j_sound.pause();
k_sound.pause();
d_sound.pause();
r_sound.pause();
p_sound.play();
ph_sound.pause();
}
else if (item === 'Filipino'){
  background(fi);
  rect(windowWidth/9, windowHeight/3, 1500, 600);
text(`${languages[10].name}`, 1500, 400);
text(`${greetings[10].name}`, 1500, 500);
text(`${cheer[10].name}`, 1500, 600);
a_sound.pause();
s_sound.pause();
f_sound.pause();
c_sound.pause();
v_sound.pause();
j_sound.pause();
k_sound.pause();
d_sound.pause();
r_sound.pause();
p_sound.pause();
ph_sound.play();
}
}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png' )
  } else if (key === 'c'){
    clear();
  }

  return false;
}
