import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',

  fields: [
    // ---------------------------------------------------------
    // HERO BANNERS
    // ---------------------------------------------------------
    defineField({
      name: 'banners',
      title: 'Hero Banners',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'text' }),
            defineField({ name: 'btnText', title: 'Button Text', type: 'string' }),
          ],
        }),
      ],
    }),

    // ---------------------------------------------------------
    // FEATURED PACKAGE (REFERENCES)
    // ---------------------------------------------------------
   defineField({
      name: 'featuredPackages',
      title: 'Featured Packages',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({
          name: 'packages',
          title: 'Packages',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'package' }] }],
        }),
      ],
    }),

    // ---------------------------------------------------------
    // WHY US
    // ---------------------------------------------------------
    defineField({
      name: 'whyUs',
      title: 'Why Choose Us',
      type: 'object',
      fields: [
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
      ],
    }),

    // ---------------------------------------------------------
    // SERVICES
    // ---------------------------------------------------------
    defineField({
      name: 'services',
      title: 'Our Services',
      type: 'object',
      fields: [
        defineField({ name: 'description', title: 'Section Description', type: 'text' }),
        defineField({
          name: 'sections',
          title: 'Service Sections',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
                defineField({ name: 'icon', title: 'Icon Name', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ---------------------------------------------------------
    // TESTIMONIALS
    // ---------------------------------------------------------
    defineField({
      name: 'testimonial',
      title: 'Testimonials',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
        }),
        defineField({
          name: 'feedbacks',
          title: 'Feedback List',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'text', title: 'Text', type: 'text' }),
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'email', title: 'Email', type: 'string' }),
                defineField({ name: 'rating', title: 'Rating (1–5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ---------------------------------------------------------
    // TOUR TYPE
    // ---------------------------------------------------------
    defineField({
      name: 'tourType',
      title: 'Tour Types',
      type: 'object',
      fields: [
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'types',
          title: 'Tour Types',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
                defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
