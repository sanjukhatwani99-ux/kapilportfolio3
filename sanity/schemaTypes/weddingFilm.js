export default {
  name: 'weddingFilm',
  title: 'Weddings Page — Films',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (e.g. Priya & Arjun, Ahmedabad)',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'From a URL like youtube.com/watch?v=THIS_PART — just paste the ID',
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
    select: { title: 'title' }
  }
};
