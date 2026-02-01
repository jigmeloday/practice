import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main heading of the contact page, e.g., "Contact Us"',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Short description under the title.',
    }),

    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),

    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Map Embed URL',
      type: 'url',
      description: 'Paste the Google Maps embed link here.',
    }),

    // Optional Additional Contact Items (future-proof)
  ],
});
