export default async (city: String, filters) => {
  const { data, error } = await useFetch(`/api/cars/${city}`, {
    params: {
      ...filters,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "unable to fetch cars",
    });
  }

  return data;
};
