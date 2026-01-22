const canvas = document.getElementById('gradient');
const ctx = canvas.getContext('2d', { alpha: false });

let width, height;
let time = 0;
let animationFrameId = null;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);

// Color palette - neon purples, pinks, blues, greens
const colors = [
    { r: 138, g: 43, b: 226 },   // Blue Violet
    { r: 255, g: 0, b: 255 },    // Magenta
    { r: 0, g: 255, b: 255 },    // Cyan
    { r: 57, g: 255, b: 20 },    // Neon Green
    { r: 255, g: 20, b: 147 }    // Deep Pink
];

function interpolateColor(color1, color2, factor) {
    return {
        r: Math.round(color1.r + (color2.r - color1.r) * factor),
        g: Math.round(color1.g + (color2.g - color1.g) * factor),
        b: Math.round(color1.b + (color2.b - color1.b) * factor)
    };
}

function drawGradient() {
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;

            // Create flowing organic shapes
            const nx = x / width - 0.5;
            const ny = y / height - 0.5;

            const angle1 = Math.atan2(ny, nx) + time * 0.3;
            const angle2 = Math.atan2(ny, nx) + time * 0.5;
            
            const dist = Math.sqrt(nx * nx + ny * ny);
            
            const wave1 = Math.sin(dist * 5 + time * 2) * 0.5 + 0.5;
            const wave2 = Math.cos(angle1 * 3 + time) * 0.5 + 0.5;
            const wave3 = Math.sin(angle2 * 2 - time * 1.5) * 0.5 + 0.5;

            // Blend multiple color zones
            const colorIndex1 = Math.floor(wave1 * (colors.length - 1));
            const colorIndex2 = Math.floor(wave2 * (colors.length - 1));
            
            const color1 = colors[colorIndex1];
            const color2 = colors[colorIndex2];
            
            const blendedColor = interpolateColor(color1, color2, wave3);

            // Darken the overall effect for that underground lab feel
            const darkness = 0.3;
            data[index] = blendedColor.r * darkness;
            data[index + 1] = blendedColor.g * darkness;
            data[index + 2] = blendedColor.b * darkness;
            data[index + 3] = 255;
        }
    }

    ctx.putImageData(imageData, 0, 0);
}

function animate() {
    time += 0.01;
    drawGradient();
    animationFrameId = requestAnimationFrame(animate);
}

animate();

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
});
