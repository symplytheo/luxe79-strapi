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

export interface GeneralOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_general_order_items';
  info: {
    displayName: 'Order Item';
    icon: 'stack';
  };
  attributes: {
    color: Schema.Attribute.String;
    price: Schema.Attribute.Integer & Schema.Attribute.Required;
    productId: Schema.Attribute.String;
    productName: Schema.Attribute.String & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    size: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.multi-color': GeneralMultiColor;
      'general.order-item': GeneralOrderItem;
    }
  }
}
