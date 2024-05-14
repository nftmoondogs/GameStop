// components/TwitterVideoEmbeds.jsx
import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TwitterVideoEmbeds = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
      <div className="w-full p-2">
        <TwitterTweetEmbed tweetId="1790472153470759217" />
      </div>
      <div className="w-full p-2">
        <TwitterTweetEmbed tweetId="1790464599575167004" />
      </div>
      <div className="w-full p-2">
        <TwitterTweetEmbed tweetId="1790457051115847720" />
      </div>
      <div className="w-full p-2">
        <TwitterTweetEmbed tweetId="1790170162265460831" />
      </div>
    </div>
  );
};

export default TwitterVideoEmbeds;
