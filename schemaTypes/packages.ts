// schemas/package.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'package',
  title: 'Package',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
     defineField({
      name: 'cover',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'subImage1',
      title: 'Sub Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'subImage2',
      title: 'Sub Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'subImage3',
      title: 'Sub Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({
      name: 'location',
      title: 'Locations',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tourType',
      title: 'Tour Types',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'places',
      title: 'Places',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'main', type: 'string', title: 'Main Place' },
            {
              name: 'subplaces',
              type: 'array',
              of: [{ type: 'string' }],
              title: 'Sub Places',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'included',
      title: 'Included in Package',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'notIncluded',
      title: 'Not Included in Package',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
    defineField({
      name: 'galleryImage',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
})
