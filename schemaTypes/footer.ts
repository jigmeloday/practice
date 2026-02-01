import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'companyTitle',
      title: 'Company Title',
      type: 'string',
    }),

    defineField({
      name: 'companyDescription',
      title: 'Company Description',
      type: 'text',
    }),

    // --- Social Links ---
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'socialItem',
          fields: [
            { name: 'label', title: 'Label (Short e.g., FB, IG)', type: 'string' },
            { name: 'link', title: 'Link URL', type: 'url' },
          ],
        }),
      ],
    }),

    // --- Quick Links ---
    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'quickLink',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'href', title: 'URL', type: 'string' },
          ],
        }),
      ],
    }),

    // --- Other Links ---
    defineField({
      name: 'otherLinks',
      title: 'Other Links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'otherLink',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'href', title: 'URL', type: 'string' },
          ],
        }),
      ],
    }),

    // --- Contact Info ---
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
});
