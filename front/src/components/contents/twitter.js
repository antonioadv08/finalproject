import React, { Component } from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default class Twitter extends Component {
    render() {
        return (
            <div>
                <div className="centerContent">
<div className="selfCenter standardWidth">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="realDonaldTrump"
  options={{height: 600,width:600}}
/>
</div>
</div>
            </div>
        )
    }
}
