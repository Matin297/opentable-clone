export const createQueryString = ({
  searchParams,
  key,
  value,
}: {
  searchParams: string;
  key: string;
  value?: string;
}) => {
  const params = new URLSearchParams(searchParams);

  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  return params.toString();
};
