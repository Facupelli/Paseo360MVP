export const getTopDivPosition = (ref: HTMLDivElement) => {
  return ref.getBoundingClientRect().top + ref.getBoundingClientRect().height;
};

export const getLeftDivPosition = (ref: HTMLDivElement) => {
  return ref.getBoundingClientRect().left;
};
