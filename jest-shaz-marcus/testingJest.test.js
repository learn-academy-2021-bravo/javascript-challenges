describe("tired", () => {
  test('should returns "drink coffee" if you are tired and "keep working" if you are not tired ', () => {
    expect(tired("tired")).toEqual("drink coffee");
    expect(tired("not tired")).toEqual("keep working");
  });
});

const tired = (str) => {
  if (str === "tired") {
    return `drink coffee`;
  } else if (str === "not tired") {
    return `keep working`;
  }
};
