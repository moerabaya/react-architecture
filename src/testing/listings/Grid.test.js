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

test("There is a React in this title", () => {
  expect(dataTest).toContain("React");
});

// Arrays
const data2 = ["React Native", "React"];

test("The list of courses contains React Native and React", () => {
  expect(["React Native", "React", "MeteorJS"]).toEqual(
    expect.arrayContaining(data2)
  );
});

// Objects
test("The first course to have a property title", () => {
  expect(data[0]).toHaveProperty("category");
  expect(data[0]).toHaveProperty("title");
  expect(data[0]).toHaveProperty("id");
  expect(data[0]).toHaveProperty("release_date");
});

test("The first course to have a property views and value of 31,266", () => {
  expect(data[0]).toHaveProperty("views", "31,266");
});
