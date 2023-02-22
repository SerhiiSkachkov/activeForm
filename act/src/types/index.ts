export type PytonBooleanValues = 'True' | 'False';

export enum FieldVariantsEnum {
  BOL = 'bool',
  REF = 'ref',
  ENUM = 'enum',
  INT = 'int',
  FLOAT = 'float',
}

export type BaseOptionFieldValues = {
  type: FieldVariantsEnum;
  alias: string;
  editable: PytonBooleanValues;
  required: PytonBooleanValues;
  multiple: PytonBooleanValues;
};
