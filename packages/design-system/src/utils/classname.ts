const cn = (...args: string[]): string => {
  return args.filter(Boolean).join(" ");
};

export { cn, cn as classname}