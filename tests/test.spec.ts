import { getPodcastFeed, getPodcastFeedFromURL } from '../src/index';
import { expect } from 'chai';
import 'mocha';

describe('GetPodcastFeed', () => {

	it('should return Hi', () => {
		const result = getPodcastFeed();
		expect(result).to.equal('Hi');
	});

	it('should return Hi', () => {
		const result = getPodcastFeed();
		expect(result).to.not.equal('Hi');
	});

});

describe('GetPodcastFeedFromURL', () => {

	it('should return Goodbye', () => {
		const result = getPodcastFeedFromURL();
		expect(result).to.equal('Goodbye');
	});

});