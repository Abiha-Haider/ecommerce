import { NextRequest, NextResponse } from "next/server";
import { cartColumns, db } from "../../../lib/drizzle";
import { and , eq } from "drizzle-orm";


export const POST = async (request: NextRequest) => {
  const req = await request.json();

  try {
    const res = await db
      .insert(cartColumns)
      .values({
        // id: req.id,
        user_id: req.user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
        image_url: req.image_url,
      }).onConflictDoUpdate({
        target: [cartColumns.product_title, cartColumns.user_id],
        set: {
          product_quantity: req.product_quantity,
          product_price: req.product_price
        }
      })
      .returning();
    console.log("Data posted to database");
    return NextResponse.json({ res });
    
  } catch (error) {
    console.log("Error while posting to Database")
    console.log("error", error);
    return NextResponse.json({ message: "Something went wrong" })
  }
};

export const GET = async (request: NextRequest) => {
  const uid = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartColumns)
      .where(eq(cartColumns.user_id, uid));
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};

export const DELETE = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db
      .delete(cartColumns)
      .where(
        and(
          eq(cartColumns.user_id, req.user_id),
          eq(cartColumns.product_title, req.product_title)
        )
      )
      .returning();
    console.log('Product Successfully Deleted')
    return NextResponse.json({ message: "Product Successfully Deleted" });
  } catch (error) {
    console.log("Error removing item from cart", error);
    return NextResponse.json({ message: "Error Deleting Product" });
  }
};






















// import { NextRequest, NextResponse } from "next/server"
// import { cart, db } from "@/lib/drizzle"
// import {v4 as uuid} from "uuid"
// import { cookies } from "next/dist/client/components/headers"

// export const GET = async (request: Request) => {



//     try {
//         const res = await db.select().from(cart);
//         return NextResponse.json({res})
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({message: "Something went wrong"})
        
//    }
// }


// export const POST = async (request: NextRequest) => {
//   const req = await request.json();

//     const uid = uuid();
//     const setCookies = cookies();

//     if (!cookies().has("user_id")) {
//         setCookies.set("user_id", uid)
//     }
  
//   try {
//       const res = await db.insert(cart).values({
//         product_id: req.product_id,
//         quantity: 1,
//         user_id: cookies().get("user_id")?.value as string
//       });
//     return NextResponse.json({ res });
//   } catch (error) {}
// };


// import { NextRequest, NextResponse } from "next/server"
// import { cart, db } from "@/lib/drizzle"
// import {v4 as uuid} from "uuid"
// import { cookies } from "next/dist/client/components/headers"

// import { NextRequest } from "next/server";

// export const GET = async (request: Request) => {



//     try {
//         const res = await db.select().from(cart);
//         return NextResponse.json({res})
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({message: "Something went wrong"})
        
//    }
// }


// export const POST = async (request: Request) => {
//   const req = await request.json();

//     const uid = uuid();
//     const setCookies = cookies();

//     if (!cookies().has("user_id")) {
//         setCookies.set("user_id", uid)
//     }
    
  

  
//   try {
//       const res = await db.insert(cart).values({
//         product_id: req.product_id,
//         quantity: 1,
//         user_id: cookies().get("user_id")?.value as string
//       });
//     return NextResponse.json({ res });
//   } catch(error){}
// };
// import { db, cartColumns } from "../../../lib/drizzle"
// import { NextRequest, NextResponse } from "next/server";
// export const POST = async (request: NextRequest) => {
//   const req = await request.json();
//   try {

//     const res = await db.insert(cartColumns).values({
//       user_id: req.user_id,
//       product_id: req.product_id,
//       product_title: req.product_title,
//       product_price: req.product_price,
//       product_quantity: req.product_quantit,
//       image_url: req.image_url,
//     })
//     .returning();
//     return NextResponse.json({ res });
//     console.log('data posted to database')
//   } catch (error) {
//     console.log("Error while [psting to database")
//     console.log("error", error);
//     return NextResponse.json({ message: "something" });
//   }

// };




