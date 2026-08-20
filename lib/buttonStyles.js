const BASE = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-sm transition-colors";

const VARIANTS = {
  primary: "bg-primary text-white hover:bg-primaryDark",
  secondary: "bg-lavenderSoft text-primaryDark hover:bg-lavender",
  tertiary: "bg-lavenderPale text-primaryDark hover:bg-lavenderSoft",
  danger: "bg-danger text-white hover:bg-dangerDark",
};

export function buttonStyles(variant) {
  return `${BASE} ${VARIANTS[variant]}`;
}
