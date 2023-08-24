import { defineField } from "sanity";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "desc",
      type: "string",
      title: "Description",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
   defineField ({
      name: "slug",
      type: "slug",
     title: "Slug",
     options: {
       source: "title",
       maxLength: 50,
       }
    }),
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "category",
        },  
      ],
    },
  ],
};