export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomColor = (colors: string[]): string => {
  return colors[random(0, colors.length)];
};
