export default {
  name: 'testimonial',
  title: 'Home — Testimonials',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required()
    },
    {
      name: 'name',
      title: 'Name (e.g. Riya & Aman)',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'location',
      title: 'Location / Company (e.g. Ahmedabad)',
      type: 'string'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }
  ],
  preview: {
    select: { title: 'name', subtitle: 'quote' }
  }
};
