export const minLength = (min: number, msg = `Минимальная длина: ${min}`) => (value: any) => (value && value.length < min ? msg : null);
