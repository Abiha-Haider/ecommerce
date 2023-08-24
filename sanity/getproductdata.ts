import { client } from "./lib/client";

export default async function getProductData() {
  const res = await client.fetch(`*[_type=='product']
  {title,
    desc,
  _id,
category -> {
  name
},
price,
image,
}`);
return res;
}