export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded-lg font-medium transition-colors duration-200";

  const variants = {
    primary: `
      bg-accent text-white hover:bg-accentLight
      dark:bg-accent dark:hover:bg-accentLight
    `,
    outline: `
      border border-accent text-accent
      hover:bg-accent hover:text-white
      dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-white
    `,
  };

  return (
    <button {...props} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
