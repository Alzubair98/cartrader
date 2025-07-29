export default defineEventHandler(async (event) => {
  // the user will send the data in the body of the request so we need to access these ata
  const body = await readBody(event);

  return body;
});
