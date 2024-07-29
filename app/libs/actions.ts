'use server'
import { z } from 'zod';
import { writeFile } from 'fs/promises';
import path, { join } from 'path';
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache';


const ProductSchema = z.object({
    id: z.string(),
    category_id: z.string(),
    name: z.string(),
    main_image: z.string(),
    big_image: z.string(),
    price: z.string(),
    quantity: z.number(),
    return_delay: z.number(), // Période en jours pour le test du produit et le retour
    warranty_period: z.number(),
    create_at: z.string(),
    update_at: z.string(),
    is_delete: z.boolean(),
  });
   
const CreateProduct = ProductSchema.omit({ id: true, create_at: true, update_at:true,is_delete:true });


export async function createProduct(formData:FormData){

    const rawFormData = {
        productCategorie: formData.get('productCategorie'),
        productName: formData.get('productName'),
        productDesciption: formData.get('productDesciption'),
        price: formData.get('price'),
        quantitie: formData.get('quantitie'),
        mainImage: formData.get('mainImage') as File,
        bigImage: formData.get('bigImage') as File,
        autherImage:formData.getAll('otherImages')
    };
    // Test it out:
    const product_name = rawFormData.productName?.toString
    const product_description = rawFormData.productDesciption
    const mainImagePath = await saveImage(rawFormData.mainImage)
    const bigImagePath = await saveImage(rawFormData.bigImage)
    const create_at = new Date().toISOString().split('T')[0]
    const update_at = new Date().toISOString().split('T')[0]
    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        await sql.query(createProductTableQuery);
        console.log('Table created successfully.');
        await sql`INSERT INTO mon_artisan_Product (
          
          category_id,
          name,
          main_image,
          big_image,
          price,
          quantity,
          return_delay,
          warranty_period,
          create_at,
          update_at,
          is_delete
        ) VALUES (
            
          ${1},
          ${"Product One"},
          ${"link1"},
          ${"link2"},
          ${100},
          ${2},
          ${5},
          ${30},
          ${create_at},
          ${update_at},
          ${false}
        );`
        revalidatePath('/dashboard/add-product');
      } catch (error) {
        console.error('Error creating table:', error);
      }
    
}

const createProductTableQuery = `
  CREATE TABLE IF NOT EXISTS mon_artisan_Product (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    category_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    main_image TEXT NOT NULL,
    big_image TEXT NOT NULL,
    price VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    return_delay INT NOT NULL,
    warranty_period INT NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_delete BOOLEAN NOT NULL DEFAULT FALSE
  );
`;

const insertProductQuery = `
  INSERT INTO mon_artisan_Product (
    id,
    category_id,
    name,
    main_image,
    big_image,
    price,
    quantity,
    return_delay,
    warranty_period,
    create_at,
    update_at,
    is_delete
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
`;

async function saveImage(file:File) {
    
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const currentTime = new Date().getTime()
      const cwd = process.cwd()
      console.log(cwd)
      const fileName = `${currentTime}${file.name.trim()}`
      const path = join('/tmp/',fileName)
      
      await writeFile(path,buffer)
      return path
}