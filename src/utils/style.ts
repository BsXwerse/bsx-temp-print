import { TextAlign, TextDecoration } from "@/types/enums/style";
import Style from "@/types/style";

export default function getStyleObject(style: Style) {
  return {
    fontSize: getFontSize(style),
    fontStyle: getFontStyle(style),
    fontWeight: getFontWeight(style),
    textDecoration: getTextDecoration(style),
    textAlign: getTextAlign(style),
    color: getTextColor(style),
    fontFamily: getFontFamily(style),
    border: getBorder(style),
  };
}

export function getFontSize(style: Style) {
  return typeof style.fontSize === "number" ? style.fontSize + "pt" : "";
}

export function getFontStyle(style: Style) {
  return typeof style.isItalic === "boolean"
    ? style.isItalic
      ? "italic"
      : "normal"
    : "";
}

export function getFontWeight(style: Style) {
  return typeof style.isBold === "boolean"
    ? style.isBold
      ? "bold"
      : "normal"
    : "";
}

export function getTextDecoration(style: Style) {
  switch (style.textDecoration) {
    case TextDecoration.Underline:
      return "underline";
    case TextDecoration.LineThrough:
      return "line-through";
    default:
      return "none";
  }
}

export function getTextAlign(style: Style) {
  switch (style.textAlign) {
    case TextAlign.Right:
      return "right" as const;
    case TextAlign.Center:
      return "center" as const;
    default:
      return "left" as const;
  }
}

export function getTextColor(style: Style) {
  return typeof style.textColor === "string" ? style.textColor : "";
}

export function getFontFamily(style: Style) {
  return typeof style.fontFamily === "string" ? style.fontFamily : "";
}

export function getBorder(style: Style) {
  return typeof style.hasBorder === "boolean" && style.hasBorder
    ? "2px solid black"
    : "";
}
