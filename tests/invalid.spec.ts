import { readFileSync } from "fs";
import { join } from "path";
import { getPodcastFeed } from "../src/index";
import { expect, should } from "chai";
import "mocha";

//local xml test feeds
const INVALID_FEED = readFileSync(
  join(__dirname, "./test_xml/invalid/invalid.xml")
).toString();

describe("Parse invalid xml feed", () => {
  it("should throw an error", () => {
    try {
      getPodcastFeed(INVALID_FEED);
    } catch (e) {
      expect(e).to.exist;
      expect(e.name).to.eqls("Error");
      expect(e.message).to.eqls(
        "Closing tag 'language' is expected inplace of 'channel'."
      );
      return;
    }
    expect.fail("An Error should've been thrown");
  });
});
