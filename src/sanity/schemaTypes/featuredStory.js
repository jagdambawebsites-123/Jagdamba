export const featuredStory = {
    name: 'featuredStory',
    title: 'Featured Story (Home Page)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'DD MMM, YYYY',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'href',
            title: 'Link URL',
            type: 'string',
            description: 'Where should this card link to? (e.g., /news or an external link)',
            initialValue: '/news',
        },
    ],
}
