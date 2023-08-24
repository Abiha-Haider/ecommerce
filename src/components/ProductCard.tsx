import Image, { StaticImageData } from "next/image";

function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData;
}) {
  return (
    <div>
      <Image src={props.img} alt="product" />
      <h3 className="font-bold text-lg mt-3"> {props.title}</h3>
      <p>${props.price}</p>
    </div>
  );
}

export default ProductCard;
