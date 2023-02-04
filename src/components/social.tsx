import { VStack } from '@chakra-ui/react';

import type { FC } from 'react';

import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';

const shareData = {
  url: 'https://www.rupibeautystudio.com',
  quote:
    "You've have to checkout Rupi Beauty Studio's newest location in Pearl River, NY! Great Staff that makes you look your best!",
  hashtag: 'rupibeauty',
};

export const SocialShare: FC<{
  twitter?: boolean;
  facebook?: boolean;
  pinterest?: boolean;
}> = ({ twitter = false, facebook = false, pinterest = false }) => {
  return (
    <VStack position="fixed" zIndex="docked" right={4} bottom={36}>
      {facebook ? (
        <FacebookShareButton {...shareData}>
          <FacebookIcon size={32} round={false} />
        </FacebookShareButton>
      ) : null}
      {twitter ? (
        <TwitterShareButton
          url={shareData.url}
          title={shareData.quote}
          hashtags={[shareData.hashtag]}
        >
          <TwitterIcon size={32} round={false} />
        </TwitterShareButton>
      ) : null}
      {pinterest ? (
        <PinterestShareButton url={shareData.url} media={shareData.quote}>
          <PinterestIcon size={32} round={false} />
        </PinterestShareButton>
      ) : null}
    </VStack>
  );
};
