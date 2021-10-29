import { readFileSync } from "fs";
import { join } from "path";
import { getPodcastFeed } from "../src/index";
import { expect } from "chai";
import "mocha";

//local xml test feeds
const NEWFEED_FEED = readFileSync(
  join(__dirname, "./test_xml/new-feed-url/new-feed-url.xml")
).toString();

describe("Parse xml feed with a new feed associated with it", () => {
  it("should parse the new feed instead", async () => {
    const result = await getPodcastFeed(NEWFEED_FEED);
    expect(result).to.exist;
    expect(result.title).to.equal("AVICII FM");
    expect(result.subtitle).to.equal("AVICII FM");
    expect(result.owner.name).to.equal("Avicii");
    expect(result.owner.email).to.equal("legal@avicii.com");
    expect(result.author).to.equal("Avicii");
    expect(result.episodes.length).to.be.greaterThan(0);
    expect(result.website).to.exist;
    expect(result.image).to.exist;
    expect(result.description).to.exist;
    expect(result.funding).to.exist;
    expect(result.category).to.eql([{ category: "Music", subcategory: [] }]);
  });
});
