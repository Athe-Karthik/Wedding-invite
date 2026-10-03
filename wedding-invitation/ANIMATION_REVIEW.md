# Vinayaka Animation Review Route

This branch adds an isolated review studio to the existing Vite/React invitation app.

## Preview
After deploying this branch on Vercel, open:
`https://YOUR-VERCEL-DEPLOYMENT/?studio=vinayaka`

The original invitation remains available at the root URL without the query parameter.

## Load the three artwork layers
The review page has three file pickers. Select the cleaned assets from the previously supplied `vinayaka-production-preview.zip`:
- `assets/background.png`
- `assets/chakra.png`
- `assets/vinayaka.png`

The files are loaded locally in the browser for review; they are not uploaded to a server. This keeps the branch lightweight while allowing the actual PNG artwork to be reviewed on the Vercel preview.

## Animation
- Background remains still.
- Chakra rotates clockwise with linear easing and an infinite loop.
- Default duration: 60 seconds per revolution (adjustable 30–120 seconds).
- Vinayaka remains still in the foreground.
- Pause/play control included.

## Deploy
In Vercel, select branch `vinayaka-animation-review`. No root-directory change is required.
