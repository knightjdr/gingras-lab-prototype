# Gingras lab website

## Build for deploying on GitHub

```
npm run build
npm run deploy
```

## Build for deploying to production

```
npm run production
```

## Convert images

Convert images to WebP and reduce quality of JPEGs.

1. Create image at 3x the required dimensions and place in `src/images/unprocessed`.

2. Move into directory and convert images
```
cd src/images
node index.js
```

3. JPEGs and WebP at 1x, 2x and 3x scale will be in the `processed` folder. The 3x images
correspond to the dimensions of the original image.