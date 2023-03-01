import { fastClassNames } from './fast-class-names';

describe('fast-class-names', () => {
  const STYLES = {
    'test-selector': 'test-selector-key',
    'test-selector__element': 'test-selector__element-key',
    'test-selector__element-2': 'test-selector__element-2-key',
    'test-selector--modifier': 'test-selector--modifier-key',
  }
  const cn = fastClassNames(STYLES);

  test('should return selector key', () => {
    const result = cn('test-selector');

    expect(result).toBe('test-selector-key');
  });

  test('should return selector key and element key', () => {
    const result = cn('test-selector', {
      'test-selector__element': true,
    });

    expect(result).toBe('test-selector-key test-selector__element-key');
  });

  test('should return selector key and element key if element = true', () => {
    const result = cn('test-selector', {
      'test-selector__element': true,
      'test-selector__element-2': false,
    });

    expect(result).toBe('test-selector-key test-selector__element-key');
  });

  test('should return only selector key', () => {
    const result = cn('test-selector', {
      'test-selector__element': false,
      'test-selector__element-2': false,
    });

    expect(result).toBe('test-selector-key');
  });

  test('should return selectors if all in string', () => {
    const result = cn('test-selector test-selector__element');

    expect(result).toBe('test-selector test-selector__element');
  });
})