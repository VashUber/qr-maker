export default defineEventHandler(async (e) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  return {
    msg: "ttt",
  };
});
