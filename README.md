# Gingras lab website

Deprecated for [gingras-lab](https://github.com/knightjdr/gingras-lab).

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
* lab personnel images should be 450px width by 600px height
* AC photo on home page should be 600x804

2. Move into directory and convert images
```
cd src/images
node index.js
```

3. JPEGs and WebP at 1x, 2x and 3x scale will be in the `processed` folder. The 3x images
correspond to the dimensions of the original image.

4. Copy images to `public/assets/images` or `public/assets/images/people`

## Publication list

1. Move into directory and run script
```
cd src/publications
node index.js
```

2. This will generate an html file with the list of publications in `src/publications/output`

3. Copy html to `public/publications/index/html`

PMIDs can be blacklisted by adding them in the `src/publications/index.js` file
