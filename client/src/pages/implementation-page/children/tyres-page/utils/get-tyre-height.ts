import { DropdownItemParams } from '@artemelka/react-components';

export function getTyreHeight(
  widthOptions: Array<DropdownItemParams>,
  ratioOptions: Array<DropdownItemParams>,
): string {
  const width = widthOptions[0] ? Number(widthOptions[0].value) : 0;
  const ratio = ratioOptions[0] ? Number(ratioOptions[0].value) : 0;

  return width && ratio ? `${Math.round((width / 100) * ratio)}` : '';
}
