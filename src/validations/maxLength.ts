export const maxLength = (max: number, msg = `Максимальная длина: ${max}`) => {
  return (value: any) => (value && value.length > max ? msg : null);
};
