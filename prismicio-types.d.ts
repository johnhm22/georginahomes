// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = ContactUsSlice | TestimonialsSlice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, 'about', Lang>;

type HomepageDocumentDataSlicesSlice =
  | PropertySlice
  | HeroSlice
  | TestimonialsSlice;

type HomepageDocumentDataSlices2Slice = PropertySlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never> /**
   * Prop title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.prop_title
   * - **Tab**: Properties
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  prop_title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices2[]
   * - **Tab**: Properties
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices2: prismic.SliceZone<HomepageDocumentDataSlices2Slice>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
  >;

type NewPageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for new page documents
 */
interface NewPageDocumentData {
  /**
   * Test new page field in *new page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: new_page.test_new_page
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  test_new_page: prismic.KeyTextField;

  /**
   * colour field in *new page*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: new_page.colour
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  colour: prismic.ColorField;

  /**
   * Slice Zone field in *new page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: new_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NewPageDocumentDataSlicesSlice> /**
   * Meta Title field in *new page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: new_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *new page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: new_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *new page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: new_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * new page document from Prismic
 *
 * - **API ID**: `new_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NewPageDocumentData>,
    'new_page',
    Lang
  >;

type PropertiesDocumentDataSlicesSlice = PropertySlice;

/**
 * Content for Properties documents
 */
interface PropertiesDocumentData {
  /**
   * Slice Zone field in *Properties*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PropertiesDocumentDataSlicesSlice> /**
   * Meta Title field in *Properties*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: properties.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Properties*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: properties.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Properties*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: properties.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Properties document from Prismic
 *
 * - **API ID**: `properties`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PropertiesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PropertiesDocumentData>,
    'properties',
    Lang
  >;

type PropertyTestDocumentDataSlicesSlice = PropertySlice;

/**
 * Content for Property Test documents
 */
interface PropertyTestDocumentData {
  /**
   * Heading of custom type field in *Property Test*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property_test.heading_of_custom_type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading_of_custom_type: prismic.KeyTextField;

  /**
   * Slice Zone field in *Property Test*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: property_test.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PropertyTestDocumentDataSlicesSlice>;
}

/**
 * Property Test document from Prismic
 *
 * - **API ID**: `property_test`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PropertyTestDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PropertyTestDocumentData>,
    'property_test',
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    'settings',
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | HomepageDocument
  | NewPageDocument
  | PropertiesDocument
  | PropertyTestDocument
  | SettingsDocument;

/**
 * Primary content in *ContactUs → Default → Primary*
 */
export interface ContactUsSliceDefaultPrimary {
  /**
   * Title field in *ContactUs → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Email field in *ContactUs → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.default.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Contact number field in *ContactUs → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.default.primary.contact_number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_number: prismic.KeyTextField;

  /**
   * Background image field in *ContactUs → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Default variation for ContactUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ContactUsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactUs*
 */
type ContactUsSliceVariation = ContactUsSliceDefault;

/**
 * ContactUs Shared Slice
 *
 * - **API ID**: `contact_us`
 * - **Description**: ContactUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsSlice = prismic.SharedSlice<
  'contact_us',
  ContactUsSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Add in the banner heading
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A few words following heading
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Item in *Property → Default → Primary → Photos*
 */
export interface PropertySliceDefaultPrimaryPhotosItem {
  /**
   * Property photo field in *Property → Default → Primary → Photos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: property.default.primary.photos[].property_photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  property_photo: prismic.ImageField<never>;
}

/**
 * Primary content in *Property → Default → Primary*
 */
export interface PropertySliceDefaultPrimary {
  /**
   * Property Address field in *Property → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property.default.primary.property_address
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  property_address: prismic.KeyTextField;

  /**
   * Monthly rent field in *Property → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property.default.primary.monthly_rent
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  monthly_rent: prismic.KeyTextField;

  /**
   * Title field in *Property → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Address field in *Property → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property.default.primary.address
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField;

  /**
   * Description field in *Property → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * List date field in *Property → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property.default.primary.list_date
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  list_date: prismic.KeyTextField;

  /**
   * Available from field in *Property → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property.default.primary.available_from
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  available_from: prismic.KeyTextField;

  /**
   * Photos field in *Property → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: property.default.primary.photos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  photos: prismic.GroupField<Simplify<PropertySliceDefaultPrimaryPhotosItem>>;
}

/**
 * Default variation for Property Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PropertySliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<PropertySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Property*
 */
type PropertySliceVariation = PropertySliceDefault;

/**
 * Property Shared Slice
 *
 * - **API ID**: `property`
 * - **Description**: Property
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PropertySlice = prismic.SharedSlice<
  'property',
  PropertySliceVariation
>;

/**
 * Item in *Property2 → Default → Primary → Property*
 */
export interface Property2SliceDefaultPrimaryPropertyItem {
  /**
   * Monthly rent field in *Property2 → Default → Primary → Property*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property2.default.primary.property[].monthly_rent
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  monthly_rent: prismic.KeyTextField;

  /**
   * Title field in *Property2 → Default → Primary → Property*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property2.default.primary.property[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Address field in *Property2 → Default → Primary → Property*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property2.default.primary.property[].address
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField;

  /**
   * Description field in *Property2 → Default → Primary → Property*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property2.default.primary.property[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * List date field in *Property2 → Default → Primary → Property*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property2.default.primary.property[].list_date
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  list_date: prismic.KeyTextField;

  /**
   * Available from field in *Property2 → Default → Primary → Property*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: property2.default.primary.property[].available_from
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  available_from: prismic.KeyTextField;
}

/**
 * Primary content in *Property2 → Default → Primary*
 */
export interface Property2SliceDefaultPrimary {
  /**
   * Property field in *Property2 → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: property2.default.primary.property[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  property: prismic.GroupField<
    Simplify<Property2SliceDefaultPrimaryPropertyItem>
  >;
}

/**
 * Default variation for Property2 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Property2SliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<Property2SliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Property2*
 */
type Property2SliceVariation = Property2SliceDefault;

/**
 * Property2 Shared Slice
 *
 * - **API ID**: `property2`
 * - **Description**: Property2
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Property2Slice = prismic.SharedSlice<
  'property2',
  Property2SliceVariation
>;

/**
 * Item in *Testimonials → Default → Primary → Testimonials*
 */
export interface TestimonialsSliceDefaultPrimaryTestimonialItem {
  /**
   * Name field in *Testimonials → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Quote field in *Testimonials → Default → Primary → Testimonials*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial[].quote
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  quote: prismic.RichTextField;
}

/**
 * Primary content in *Testimonials → Default → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
  /**
   * Heading field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Testimonials field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  testimonial: prismic.GroupField<
    Simplify<TestimonialsSliceDefaultPrimaryTestimonialItem>
  >;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<TestimonialsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  'testimonials',
  TestimonialsSliceVariation
>;

/**
 * Item in *Testing → Default → Primary → Repeatable*
 */
export interface TestingSliceDefaultPrimaryRepeatableItem {}

/**
 * Item in *Testing → Default → Primary → Photos*
 */
export interface TestingSliceDefaultPrimaryPhotosItem {
  /**
   * Photo field in *Testing → Default → Primary → Photos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testing.default.primary.photos[].photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;
}

/**
 * Primary content in *Testing → Default → Primary*
 */
export interface TestingSliceDefaultPrimary {
  /**
   * Property Listing field in *Testing → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testing.default.primary.property_listing
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  property_listing: prismic.KeyTextField;

  /**
   * Repeatable field in *Testing → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testing.default.primary.repeatable[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  repeatable: prismic.GroupField<
    Simplify<TestingSliceDefaultPrimaryRepeatableItem>
  >;

  /**
   * Photos field in *Testing → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testing.default.primary.photos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  photos: prismic.GroupField<Simplify<TestingSliceDefaultPrimaryPhotosItem>>;
}

/**
 * Default variation for Testing Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestingSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<TestingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testing*
 */
type TestingSliceVariation = TestingSliceDefault;

/**
 * Testing Shared Slice
 *
 * - **API ID**: `testing`
 * - **Description**: Testing
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestingSlice = prismic.SharedSlice<
  'testing',
  TestingSliceVariation
>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocumentDataSlices2Slice,
      NewPageDocument,
      NewPageDocumentData,
      NewPageDocumentDataSlicesSlice,
      PropertiesDocument,
      PropertiesDocumentData,
      PropertiesDocumentDataSlicesSlice,
      PropertyTestDocument,
      PropertyTestDocumentData,
      PropertyTestDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      ContactUsSlice,
      ContactUsSliceDefaultPrimary,
      ContactUsSliceVariation,
      ContactUsSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      PropertySlice,
      PropertySliceDefaultPrimaryPhotosItem,
      PropertySliceDefaultPrimary,
      PropertySliceVariation,
      PropertySliceDefault,
      Property2Slice,
      Property2SliceDefaultPrimaryPropertyItem,
      Property2SliceDefaultPrimary,
      Property2SliceVariation,
      Property2SliceDefault,
      TestimonialsSlice,
      TestimonialsSliceDefaultPrimaryTestimonialItem,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
      TestingSlice,
      TestingSliceDefaultPrimaryRepeatableItem,
      TestingSliceDefaultPrimaryPhotosItem,
      TestingSliceDefaultPrimary,
      TestingSliceVariation,
      TestingSliceDefault
    };
  }
}
