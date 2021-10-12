import { getPodcastFeedFromURL } from "../src/index";
import { expect } from "chai";
import "mocha";

//external feeds
const TESTING_FEED: string = "https://podnews.net/clock-rss";
const AVICII_FEED: string =
  "http://officialaviciipodcast.podtree.com/feed/podcast/";
const BAMF_FEED: string = "https://hearthis.at/bamf/podcast";
const FORDOM_FEED: string = "https://feed.pod.space/fordomspodden";

describe("Fetch and parse AVICII feed", () => {
  it("should return data", async () => {
    const result = await getPodcastFeedFromURL(AVICII_FEED);
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

describe("Fetch and parse TESTING feed", () => {
  it("should return data", async () => {
    const result = await getPodcastFeedFromURL(TESTING_FEED);
    expect(result).to.exist;
    expect(result.title).to.equal("PodClock - a podcast app testing feed");
    expect(result.subtitle).to.exist;
    expect(result.owner.name).to.exist;
    expect(result.owner.email).to.exist;
    expect(result.author).to.exist;
    expect(result.episodes.length).to.be.greaterThan(0);
    expect(result.website).to.exist;
    expect(result.image).to.exist;
    expect(result.description).to.exist;
    expect(result.funding).to.exist;
    expect(result.category).to.exist;
  });
});

describe("Fetch and parse BAMF feed", () => {
  it("should return data", async () => {
    const result = await getPodcastFeedFromURL(BAMF_FEED);
    expect(result).to.exist;
    expect(result.title).to.equal("Bamf Radio - Lofi and Chill");
    expect(result.subtitle).to.exist;
    expect(result.owner.name).to.exist;
    expect(result.owner.email).to.exist;
    expect(result.author).to.exist;
    expect(result.episodes.length).to.be.greaterThan(0);
    expect(result.website).to.exist;
    expect(result.image).to.exist;
    expect(result.description).to.exist;
    expect(result.funding).to.exist;
    expect(result.category).to.exist;
  });
});

describe("Fetch and parse FORDOMSPODDEN feed", () => {
  it("should return data", async () => {
    const result = await getPodcastFeedFromURL(FORDOM_FEED);
    expect(result).to.exist;
    expect(result.title).to.equal("Fördomspodden");
    expect(result.subtitle).to.exist;
    expect(result.owner.name).to.exist;
    expect(result.owner.email).to.exist;
    expect(result.author).to.exist;
    expect(result.episodes.length).to.be.greaterThan(0);
    expect(result.website).to.exist;
    expect(result.image).to.exist;
    expect(result.description).to.exist;
    expect(result.funding).to.exist;
    expect(result.category).to.exist;
  });
});
