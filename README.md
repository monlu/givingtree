# The Giving Tree

## Synopsis

Used modern web technologies to animate a classic story
Built with CSS3 animations, HTML5 Canvas, jQuery, lettering.js and scrollr.js

## CSS3 animations

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


