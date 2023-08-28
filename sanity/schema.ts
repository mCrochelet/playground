import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      title: "Landing pages",
      name: "landingPage",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string"
        },
        {
          title: "Name",
          name: "name",
          type: "string"
        }
      ]
    }
  ],
}
