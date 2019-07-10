const getArribute = (e, name) => {
  let target = e.target;
  let value;
  while (target) {
    value = target.getAttribute(name);
    target = value ? null : target.parentElement;
  }
  return value;
};

export { getArribute };
