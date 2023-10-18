import { CashType } from '../types';

type AccumType = {
  responseResult: CashType;
  residue: number;
};

export const getCash = (
  amount: number,
  denomination: Array<number>,
  availability: Array<number>,
): CashType => {
  const initialResponse = { residue: amount, responseResult: [] };
  const { responseResult, residue } = denomination.reduceRight(
    (acc: AccumType, nominal: number, index: number): AccumType => {
      const nomCount = Math.floor(acc.residue / nominal);
      const targetNominalCount =
        nomCount <= availability[index] ? nomCount : availability[index];

      return {
        residue: acc.residue - denomination[index] * targetNominalCount,
        responseResult:
          targetNominalCount > 0
            ? [...acc.responseResult, [targetNominalCount, denomination[index]]]
            : acc.responseResult,
      };
    },
    initialResponse,
  );

  return residue === 0 ? responseResult : [];
};
