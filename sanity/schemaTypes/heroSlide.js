export default {
  name: 'heroSlide',
  title: 'Home — Hero Slides',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'order',
      title: 'Order (1 = first slide)',
      type: 'number',
      validation: (Rule) => Rule.required()
    }
  ],
  orderings: [
    {
      title: 'Slide Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: { media: 'image', order: 'order' },
    prepare({ media, order }) {
      return { title: `Slide ${order ?? '?'}`, media };
    }
  }
};
