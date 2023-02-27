const c = '██';
const blockSize = 8 * 8;
const img = document.querySelector('img');
const out = document.querySelector('#out');
const ctx = document.createElement('canvas').getContext('2d');
const w = (ctx.canvas.width = img.width);
const h = (ctx.canvas.height = img.height);

const colours = [];
const strings = [];

document.body.appendChild(ctx.canvas);
img.onload = () => (img.hidden = true);

function getRGB(pixels, i) {
  return `color: rgb(${pixels[i]}, ${pixels[i + 1]}, ${pixels[i + 2]})`;
}

function getIndexForXY(x, y) {
  return blockSize * (y * blockSize) + x * blockSize;
}

ctx.drawImage(img, 0, 0);
const pixels = ctx.getImageData(0, 0, w, h).data;

// 50x42
for (let y = 0; y < 2; y++) {
  let string = '';
  for (let x = 0; x < 50; x++) {
    const i = getIndexForXY(x, y);
    const rgb = getRGB(pixels, i * 4);
    console.log(x, y, i, rgb)
    colours.push(rgb);
    string += `%c${c}`;
  }
//   string += '\n';
  strings.push(string);
}

out.value = `console.log(\`${strings.join('')}\`, ${colours
  .map(style => {
    return `"${style}"`;
  })
  .join(', ')})`;

eval(out.value);