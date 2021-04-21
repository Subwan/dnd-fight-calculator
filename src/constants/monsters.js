export const MONSTER_FIELDS = {
  NAME: 'name',
  NUMBER: 'number',
  EP: 'EP',
};

export const DEFAULT_MONSTER = {
  [MONSTER_FIELDS.NAME]: '1',
  [MONSTER_FIELDS.NUMBER]: 1,
  [MONSTER_FIELDS.EP]: 25, 
};

export const DEFAULT_MONSETS = [{...DEFAULT_MONSTER}];
