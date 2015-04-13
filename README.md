# The Giving Tree

## Synopsis

Used modern web technologies to animate a classic story
Built with CSS3 animations, HTML5 Canvas, jQuery, lettering.js and scrollr.js

## HTML5 canvas animation

The canvas object is created at the top of the page, but is not displayed until later in the story. It is used at different intervals to show time passing as the boy grows up. The animation is a subtle used of particles moving in a random pattern to create a "wind-like" effect. 

### HTML

```html

<canvas id="canvas"
  data-38500="opacity: 0; display: block;"
  data-38800="opacity: 1;"
  data-40300="opacity: 1;"
  data-40600="opacity: 0;"
  data-83100="opacity: 0;"
  data-83400="opacity: 1;"
  data-86200="opacity: 1;"
  data-86500="opacity: 0;"
  data-111000="opacity: 0;"
  data-111300="opacity: 1;"
  data-112800="opacity: 1;"
  data-113100="opacity: 0;"
  data-132100="opacity: 0;"
  data-132400="opacity: 1;"
  data-133900="opacity: 1;"
  data-134200="opacity: 0;"
>
</canvas>

```
### CSS

```css

#canvas{
  z-index: -10;
  position: fixed; 
  top: 0; 
  left: 0;
  display:none;
}

```

### Javascript

```javascript

$(document).ready(function() {
  var canvas = $('#canvas')[0];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  if(canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    
    
    var init = [];
    var maxParts = 100;
    for(var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 10,
        ys: -4 + Math.random() * 4 + 2,
        xs: Math.random() * 5 + 5,
        rangeY: 2
      })
    }
    
    var particles = [];
    for(var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }
    
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for(var c = 0; c < particles.length; c++) {
        var p = particles[c];
        var gradient = ctx.createLinearGradient(                         p.x, p.y, p.x + p.l * p.xs, p.y + p.l *                     p.ys)
        gradient.addColorStop(0, 'white')
        gradient.addColorStop(0.5, 'skyblue')
        gradient.addColorStop(1, 'white')
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }
    
    function move() {
      for(var b = 0; b < particles.length; b++) {
        var p = particles[b];
        
        p.x += p.xs;
        p.y += p.ys;
        if(p.x > w || p.y > h) {
          p.y = Math.random() * h;
          p.x = -20;
        }
      }
    }
    
    setInterval(draw, 30);
    
  }
});

```

## CSS3 animations

CSS3 animations were triggered at certain scroll depths, adding movement and color to the story. Leaves were rendered and made to look as though they were falling from the tree when it is speaking or gesturing. Hearts pour out from the boy and the tree to show their love. While the boy sleeps under the tree, animated Z's lazily float into the air and fade out. An example is shown below of how one set of hearts was animated. 

### HTML

```html

<div 
  id="hearts"
  data-34100="opacity: 0;" 
  data-34400="opacity: 1;"
  data-35900="opacity: 1;"
  data-36200="opacity: 0;"
>
  <i>i</i>
  <i>i</i>
  <i>i</i>
  <i>i</i>
  <i>i</i>
  <i>i</i>
  <i>i</i>
  <i>i</i>
  <i>i</i>
  <i>i</i>
</div>

```
###CSS

```css

#hearts {width:100%;text-align: center;}

#hearts i {
    color: red;
    position: absolute;
    bottom:110px; 
    left:380px;
    width: 200px;
    font-size: 48px;
    height: 200px;
    z-index: 1;
    opacity: 0;
    overflow: visible;
    transform: rotate(-20deg);
    -webkit-animation: floating 7s 0s infinite;
}
#hearts i:nth-of-type(2n) { -webkit-animation: floating2 7s 0s infinite; }
#hearts i:nth-of-type(3n) { -webkit-animation: floating3 6s 0s infinite; }
#hearts i:nth-of-type(2n+1)    { font-size:32px;}

#hearts i:nth-of-type(n)   { -webkit-animation-delay: 0s;  }
#hearts i:nth-of-type(2n)  { -webkit-animation-delay: 0.7s;}
#hearts i:nth-of-type(3n)  { -webkit-animation-delay: 1.4s;  }
#hearts i:nth-of-type(4n)  { -webkit-animation-delay: 2.1s;}
#hearts i:nth-of-type(5n)  { -webkit-animation-delay: 2.8s;  }
#hearts i:nth-of-type(6n)  { -webkit-animation-delay: 3.5s;}
#hearts i:nth-of-type(7n)  { -webkit-animation-delay: 4.2s;  }
#hearts i:nth-of-type(8n)  { -webkit-animation-delay: 4.9s;}
#hearts i:nth-of-type(9n)  { -webkit-animation-delay: 5.6s;  }
#hearts i:nth-of-type(10n) { -webkit-animation-delay: 6.3s;}

#hearts i:nth-of-type(2n)    {transform: rotate(30deg);}
#hearts i:nth-of-type(3n)    {transform: rotate(20deg);}

#hearts i:nth-of-type(n) { -webkit-animation-timing-function:ease-in-out;}

@-webkit-keyframes floating {
    
    0% {
        -webkit-transform:
            translate3d(-300,0,0);
        opacity: 0;
    }
    50%{
        opacity: 1; 
    }
    70%{
        opacity: 0; 
    }
    100% {
        -webkit-transform:
            translate3d(350px,-200px,0);
        opacity: 0;
    }
}

@-webkit-keyframes floating3 {
    0% {
        -webkit-transform:
            translate3d(-100,0,0);
        opacity: 0;
    }
    50%{
        opacity: 1; 
    }
    70%{
        opacity: 0; 
    }
    100% {
        -webkit-transform:
            translate3d(230px,-175px,0);
        opacity: 0;
    }
}

@-webkit-keyframes floating2 {
     0% {
        -webkit-transform:
            translate3d(0,0,0);
        opacity:0;
    }
    50%{
        opacity: 1; 
    }
    70%{
        opacity: 0; 
    }
    100% {
        -webkit-transform:
            translate3d(400px,-150px,0);
        opacity: 0;
    }
}

```





