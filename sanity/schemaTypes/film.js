export default {
  name: 'film',
  title: 'Films Page — Video Cards',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category Tag (e.g. Cinematic Teaser)',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'title',
      title: 'Title (e.g. Riya & Aman, Ahmedabad)',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'From a URL like youtube.com/watch?v=THIS_PART — just paste the ID, e.g. 3RDdoHoDIs0',
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
    select: { title: 'title', subtitle: 'category' }
  }
};
