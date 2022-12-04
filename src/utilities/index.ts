export const parseQueryString = (search: string): Record<string, string> => {
  return (search || "")
    .replace(/^\?/g, "")
    .split("&")
    .reduce((acc, query) => {
      const [key, value] = query.split("=");

      if (key) {
        acc[key] = decodeURIComponent(value);
      }

      return acc;
    }, {} as Record<string, string>);
};

export const validateCorrectIdValue = (inputValue: string): boolean => {
  return /^([A-Z]|[a-z]|[\d]){5,30}$/.test(inputValue);
};

export const validateCorrectPasswordValue = (inputValue: string): boolean => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/.test(inputValue);
};

export const getPriceWithComma = (price: number): string => {
  const reversePrice = price.toString().split("").reverse();
  let reverseCommaPrice = "";

  reversePrice.forEach((value, index) => {
    if (index % 3 === 0 && index !== 0) reverseCommaPrice += ",";
    reverseCommaPrice += value;
  });

  return reverseCommaPrice.split("").reverse().join("") + "원";
};
