import type { Schema, Attribute } from '@strapi/strapi';

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
    icon: 'layout';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks & Attribute.Required;
  };
}

export interface CtaCta extends Schema.Component {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'CTA';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    cta_title: Attribute.String;
    cta_href: Attribute.Text;
  };
}

export interface SocialSocialLinks extends Schema.Component {
  collectionName: 'components_social_social_links';
  info: {
    displayName: 'social_links';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    href: Attribute.String;
    social_links: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Linkedin', 'Instagram', 'Telegram']
    > &
      Attribute.Required;
  };
}

export interface StoryTypePhotoStory extends Schema.Component {
  collectionName: 'components_story_type_photo_stories';
  info: {
    displayName: 'Photo-Story';
    icon: 'file';
    description: '';
  };
  attributes: {
    story_image: Attribute.Media;
    story_content: Attribute.Blocks;
  };
}

export interface VideoStoryVideoStory extends Schema.Component {
  collectionName: 'components_video_story_video_stories';
  info: {
    displayName: 'Video Story';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    video: Attribute.Media;
  };
}

export interface WebStoryWebStory extends Schema.Component {
  collectionName: 'components_web_story_web_stories';
  info: {
    displayName: 'Web Story';
    icon: 'quote';
    description: '';
  };
  attributes: {
    headline: Attribute.String & Attribute.Required;
    sub_headline: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    cta_data: Attribute.Component<'cta.cta'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.card': CardCard;
      'cta.cta': CtaCta;
      'social.social-links': SocialSocialLinks;
      'story-type.photo-story': StoryTypePhotoStory;
      'video-story.video-story': VideoStoryVideoStory;
      'web-story.web-story': WebStoryWebStory;
    }
  }
}
