import { UserRole } from '../../../../types';

const INITIAL_ACCESS_MAP: Record<UserRole, boolean> = {
  guest: false,
  user: false,
};

export const checkAccess = (accessTypes: Array<UserRole>, userRole: UserRole): boolean => {
  const accessMap = accessTypes.reduce((acc, type) => {
    if (type === 'guest') {
      return { ...acc, guest: true };
    }

    if (type === 'user') {
      return { ...acc, user: true };
    }

    return acc;
  }, INITIAL_ACCESS_MAP);

  return accessMap[userRole];
};