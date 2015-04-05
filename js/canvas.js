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