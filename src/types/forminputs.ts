export interface SpacingSides {
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;
}

export interface SpacingData {
  padding: SpacingSides | string | number;
  margin: SpacingSides | string | number;
}

export const enum Direction {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}
