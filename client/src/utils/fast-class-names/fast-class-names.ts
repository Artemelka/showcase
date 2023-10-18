type StylesMap = Record<string, string>;
type GetClassName = (name: string, names?: Record<string, boolean>) => string;

export function fastClassNames(styles: StylesMap): GetClassName {
  return (name, names) => {
    const baseName = styles[name] || name;

    if (names) {
      const resArr = [baseName];

      /* eslint-disable no-restricted-syntax */
      for (const key in names) {
        if (names[key]) {
          resArr.push(styles[key] || key);
        }
      }

      return resArr.join(' ');
    }

    return baseName;
  };
}
