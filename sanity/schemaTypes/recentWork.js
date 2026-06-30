export default {
  name: 'recentWork',
  title: 'Home — Recent Work Gallery',
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
      name: 'tall',
      title: 'Make this a tall card?',
      type: 'boolean',
      initialValue: false
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
