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

export const validateCorrectIdValue = (inputValue: string) => {
  return /^([A-Z]|[a-z]|[\d]){5,30}$/.test(inputValue);
};

export const validateCorrectPasswordValue = (inputValue: string) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/.test(inputValue);
};
