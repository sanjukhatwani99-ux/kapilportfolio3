export default {
  name: 'weddingPhoto',
  title: 'Weddings Page — Photos',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'label',
      title: 'Label (shown on hover)',
      type: 'string',
      validation: (Rule) => Rule.required()
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
    select: { media: 'image', title: 'label' }
  }
};
