import { useSearchParams } from "react-router-dom";

export const useQueryStrings = () => {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries([...searchParams]);
  return searchParamsObject;
};
