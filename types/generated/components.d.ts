import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralMultiColor extends Struct.ComponentSchema {
  collectionName: 'components_general_multi_colors';
  info: {
    displayName: 'Multi-color';
    icon: 'chartCircle';
  };
  attributes: {
    colorHex: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    colorName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.multi-color': GeneralMultiColor;
    }
  }
}
