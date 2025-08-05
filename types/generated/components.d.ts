import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBulletPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullet_points';
  info: {
    displayName: 'bullet_points';
  };
  attributes: {
    values: Schema.Attribute.String;
  };
}

export interface SharedButtons extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'buttons';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    list_values: Schema.Attribute.Component<'shared.bullet-points', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'contactInfo';
  };
  attributes: {
    email: Schema.Attribute.String;
    location: Schema.Attribute.String;
    openHours: Schema.Attribute.String;
    phone_number: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    cta_button: Schema.Attribute.Component<'shared.buttons', false>;
    desc: Schema.Attribute.Text;
    phone_number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_contents';
  info: {
    displayName: 'footer_content';
  };
  attributes: {
    footer_desc: Schema.Attribute.String;
  };
}

export interface SharedFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'footer_links';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.social-media', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedNavigationLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_logos';
  info: {
    displayName: 'navigation_logo';
  };
  attributes: {};
}

export interface SharedPageHeaders extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_headers';
  info: {
    displayName: 'page_headers';
  };
  attributes: {
    page_desc: Schema.Attribute.Text;
    page_title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedReferenceLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_reference_locations';
  info: {
    displayName: 'referenceLocation';
  };
  attributes: {
    reference: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    global_CTA: Schema.Attribute.Component<'shared.cta', false>;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServiceProcessCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_process_cards';
  info: {
    displayName: 'service_process_card';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    step: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'social_media';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    socialLink: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats_sections';
  info: {
    displayName: 'statsSection';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface SharedWhyProcessor extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_processors';
  info: {
    displayName: 'why_processor';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.bullet-points': SharedBulletPoints;
      'shared.buttons': SharedButtons;
      'shared.card': SharedCard;
      'shared.contact-info': SharedContactInfo;
      'shared.cta': SharedCta;
      'shared.footer-content': SharedFooterContent;
      'shared.footer-links': SharedFooterLinks;
      'shared.media': SharedMedia;
      'shared.navigation-logo': SharedNavigationLogo;
      'shared.page-headers': SharedPageHeaders;
      'shared.quote': SharedQuote;
      'shared.reference-location': SharedReferenceLocation;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.service-process-card': SharedServiceProcessCard;
      'shared.slider': SharedSlider;
      'shared.social-media': SharedSocialMedia;
      'shared.stats-section': SharedStatsSection;
      'shared.why-processor': SharedWhyProcessor;
    }
  }
}
