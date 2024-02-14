import { TextAlign, TextDecoration } from "./enums/style";

export interface StyleAll {
  fontSize: number;
  isItalic: boolean;
  isBold: boolean;
  textDecoration: TextDecoration;
  textAlign: TextAlign;
  textColor: string;
  fontFamily: string;
  hasBorder: string;
}

type Style = Partial<StyleAll>;

export default Style;
