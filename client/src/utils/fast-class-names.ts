type StylesMap = Record<string, string>;
type GetClassName = (name: string, names?: Record<string, boolean>) => string;

export function fastClassNames(styles: StylesMap): GetClassName {
  return (name, names) => {
    if (names) {
      return Object.keys(names).reduce((res: string, selector) => {
        return names[selector] ? `${res} ${styles[selector] || selector}` : res;
      }, `${styles[name]}`);
    }

    return styles[name] || name;
  }
}

export function fastClassNames2(styles: StylesMap): GetClassName {
  return (name, names) => {
    if (names) {
      return name + Object.keys(names)
        .filter(selector => names[selector])
        .map(str => styles[str] || str)
        .join(' ');
    }

    return styles[name] || name;
  }
}

export function fastClassNames3(styles: StylesMap): GetClassName {
  return (name, names) => {
    const baseName = styles[name] || name;

    if (names) {
      let resArr = [baseName];

      for (let key in names) {
        if (names[key]) {
          resArr.push(styles[key] || key)
        }
      }

      return resArr.join(' ');
    }

    return baseName;
  }
}