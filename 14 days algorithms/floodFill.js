const flooFill = (image, sr, sc, newColor ) => {
    const fill = (image, sr, sc, oldColor, newColor) => {
        if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] != oldColor) {
            return;
        }
        image[sr][sc] = newColor;
        fill(image, sr - 1, sc, oldColor, newColor);
        fill(image, sr + 1, sc, oldColor, newColor);
        fill(image, sr, sc - 1, oldColor, newColor);
        fill(image, sr, sc + 1, oldColor, newColor);

    }
    if (image[sr][sc] === newColor) return image;
    fill (image, sr, sc, image[sr][sc], newColor);
    return image;

}