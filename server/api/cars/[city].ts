import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const { city } = event.context.params;

  let flteredCars = cars;

  flteredCars = flteredCars.filter((car) => {
    return car.city.toLocaleLowerCase() === city.toLocaleLowerCase();
  });

  return flteredCars;
});
