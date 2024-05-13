export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of blog',
      options: {
        source: 'title',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Title image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
