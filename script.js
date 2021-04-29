anime.timeline ({
    loop: true
  })
  .add ({
    targets: '#s-text',
    scale: [1,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el,i) => 800 * i
  })
  .add ({
    targets: '#s-text',
    opacity: 0,
    duration: 10,
    easing: "easeOutExpo",
    delay: 10
  })
  function Itemon00(x) {
    x.style.letterSpacing= "3px";
  }
  function Itemout00(x) {
    x.style.letterSpacing= "0px";
  }
  function Itemon0(x) {
    x.style.margin= "0 0 0 5px";
    x.style.letterSpacing= "3px";
    x.style.textDecoration= "none";
  }
  function Itemout0(x) {
    x.style.margin= "0";
    x.style.letterSpacing= "0px";
  }      
  function Itemon1(x) {
    x.style.color= "#0088cc";
    x.style.background= "#fff";
  }
  function Itemout1(x) {
    x.style.color= "#000000aa";
    x.style.background= "#3AA1BF";
  }
  function Itemon2(x) {
    x.style.color= "#fff";
    x.style.background= "#4fce5d";
  }
  function Itemout2(x) {
    x.style.color= "#000000aa";
    x.style.background= "#3AA1BF";
  }
  function Itemon3(x) {
    x.style.color= "#fff";
    x.style.background= "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)";
  }
  function Itemout3(x) {
    x.style.color= "#000000aa";
    x.style.background= "#3AA1BF";
  } 