import { defineType } from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    }
  ],
});