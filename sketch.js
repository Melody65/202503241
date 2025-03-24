let img1, img2;
let button1, button2;
let showAnimation1 = false;
let showAnimation2 = false;
let frame = 0;
let spriteWidth1 = 70; // 第一個按鈕動畫每幀寬度為70像素
let spriteHeight1 = 93; // 第一個按鈕動畫每幀高度為93像素
let spriteWidth2 = 69; // 第二個按鈕動畫每幀寬度為69像素
let spriteHeight2 = 84; // 第二個按鈕動畫每幀高度為84像素
let totalFrames = 10; // 假設總幀數為10
let animationSpeed = 20; // 調整動畫速度
let iframe;

function preload() {
  img1 = loadImage('1111.png');
  img2 = loadImage('2222.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // 創建第一個按鈕
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => showAnimation1 = true);
  button1.mouseOut(() => showAnimation1 = false);
  button1.mousePressed(() => {
    if (iframe) iframe.remove();
    iframe = createElement('iframe', '');
    iframe.attribute('src', 'https://melody65.github.io/20250317/');
    iframe.position((windowWidth - 1200) / 2, (windowHeight - 800) / 2);
    iframe.size(1200, 800);
  });
  
  // 創建第二個按鈕
  button2 = createButton('作品簡介');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => showAnimation2 = true);
  button2.mouseOut(() => showAnimation2 = false);
  button2.mousePressed(() => {
    if (iframe) iframe.remove();
    iframe = createElement('iframe', '');
    iframe.attribute('src', 'https://melody65.github.io/20250310/');
    iframe.position((windowWidth - 1200) / 2, (windowHeight - 800) / 2);
    iframe.size(1200, 800);
  });
}

function draw() {
  background(220);
  let currentFrame = Math.floor(frame / animationSpeed) % totalFrames;
  let sx1 = currentFrame * spriteWidth1;
  let sx2 = currentFrame * spriteWidth2;
  
  if (showAnimation1) {
    // 顯示圖片1111.png連續動畫
    image(img1, 50, 110, spriteWidth1, spriteHeight1, sx1, 0, spriteWidth1, spriteHeight1);
  } else if (frame > 0) {
    // 停留在最後一幀
    let lastFrame1 = (totalFrames - 1) * spriteWidth1;
    image(img1, 50, 110, spriteWidth1, spriteHeight1, lastFrame1, 0, spriteWidth1, spriteHeight1);
  }
  
  if (showAnimation2) {
    // 顯示圖片2222.png連續動畫
    image(img2, 180, 110, spriteWidth2, spriteHeight2, sx2, 0, spriteWidth2, spriteHeight2);
  } else if (frame > 0) {
    // 停留在最後一幀
    let lastFrame2 = (totalFrames - 1) * spriteWidth2;
    image(img2, 180, 110, spriteWidth2, spriteHeight2, lastFrame2, 0, spriteWidth2, spriteHeight2);
  }
  
  frame++;
}
