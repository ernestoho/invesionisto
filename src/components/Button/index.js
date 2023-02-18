import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  icbCircleBorder30: "rounded-radius30",
};
const variants = {
  FillGray900: "bg-gray_900 text-white_A700",
  FillGray300: "bg-gray_300 text-gray_900",
  OutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid text-gray_700",
  OutlineBluegray101: "border border-bluegray_101 border-solid",
  OutlineGray700: "border border-gray_700 border-solid text-gray_900",
  OutlineBluegray102: "border border-bluegray_102 border-solid text-gray_900",
  FillWhiteA700: "bg-white_A700 text-gray_900",
  OutlineBluegray100_1: "border border-bluegray_100 border-solid text-gray_900",
  OutlineGray600: "border border-gray_600 border-solid text-gray_900",
  OutlineGray600_1:
    "bg-white_A700 border border-gray_600 border-solid text-gray_900",
  icbOutlineBluegray30033: "bg-white_A700 shadow-bs",
};
const sizes = {
  sm: "py-[3px]",
  md: "p-[11px]",
  lg: "pl-[11px] py-[11px]",
  xl: "pr-[13px] py-[13px]",
  "2xl": "pl-[14px] py-[14px]",
  "3xl": "p-[16px]",
  "4xl": "pr-[19px] py-[19px]",
  "5xl": "p-[21px] sm:px-[20px]",
  "6xl": "pl-[16px] py-[21px]",
  "7xl": "pl-[20px] py-[21px]",
  smIcn: "p-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10", "icbCircleBorder30"]),
  variant: PropTypes.oneOf([
    "FillGray900",
    "FillGray300",
    "OutlineBluegray100",
    "OutlineBluegray101",
    "OutlineGray700",
    "OutlineBluegray102",
    "FillWhiteA700",
    "OutlineBluegray100_1",
    "OutlineGray600",
    "OutlineGray600_1",
    "icbOutlineBluegray30033",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "smIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
