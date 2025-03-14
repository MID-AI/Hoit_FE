export const generateFontSizes = () => {
  const sizes = [12, 14, 16, 18, 20, 24, 28, 32];
  const weights = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  };

  const fontSizeConfig: Record<string, [string, { fontWeight: string }]> = {};

  sizes.forEach((size) => {
    Object.entries(weights).forEach(([weightName, weightValue]) => {
      const key = `Type-${size}-${weightName}`;
      fontSizeConfig[key] = [
        `${size / 16}rem`,
        { fontWeight: weightValue.toString() },
      ];
    });
  });

  return fontSizeConfig;
};
