import { readFileSync } from "fs";
import { join } from "path";
import { getPodcastFeed } from "../src/index";
import { expect } from "chai";
import "mocha";

//local xml test feeds
const ITUNES_FEED = readFileSync(
  join(__dirname, "./test_xml/categories/itunes.xml")
).toString();

const GPLAY_FEED = readFileSync(
  join(__dirname, "./test_xml/categories/gplay.xml")
).toString();

describe("Fetch and parse feed with itunes tags", () => {
  it("should return data", async () => {
    const result = await getPodcastFeed(ITUNES_FEED);
    expect(result.category).to.eql([
      { category: "Test1", subcategory: [] },
      { category: "Test2", subcategory: [] },
      { category: "Test3", subcategory: [] },
      {
        category: "MainCategory",
        subcategory: ["SubCategory1", "SubCategory2", "SubCategory3"],
      },
    ]);
  });
});

describe("Fetch and parse feed with googleplay tags", () => {
  it("should return data", async () => {
    const result = await getPodcastFeed(GPLAY_FEED);
    expect(result.category).to.eql([
      { category: "GTest1", subcategory: [] },
      { category: "GTest2", subcategory: [] },
      { category: "GTest3", subcategory: [] },
      {
        category: "GMainCategory",
        subcategory: ["GSubCategory1", "GSubCategory2", "GSubCategory3"],
      },
    ]);
  });
});
