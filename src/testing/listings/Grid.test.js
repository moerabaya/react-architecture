import data from "../data/courses.json";

const numItems = data.length;

test("Number of items = 12", () => {
  expect(numItems).toBe(12);
});

test("Number of items greater or equal to 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('Title is "Building an App with ReactJS and MeteorJS"', () => {
  expect(dataTest).toBe("Building an App with ReactJS and MeteorJS");
});

test("There is a JS in this title", () => {
  expect(dataTest).toMatch(/JS/);
});
