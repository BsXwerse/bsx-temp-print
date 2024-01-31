import { TextAlign, TextDecoration } from "./enums/style";

export default interface Style {
  fontSize?: number;
  isItalic?: boolean;
  isBold?: boolean;
  textDecoration?: TextDecoration;
  textAlign?: TextAlign;
  textColor?: string;
  fontFamily?: string;
  hasBorder?: string;
}
