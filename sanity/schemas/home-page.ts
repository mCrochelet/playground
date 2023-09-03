import { defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Page',
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
        },
        {
            name: 'person',
            title: 'Person',
            type: 'reference',
            to: [{ type: 'landingPage' }],
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'descriptors',
            title: 'Descriptors',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ],
});