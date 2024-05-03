import {Product} from "../Interfaces/Product";

const PRODUCTS: Product[] = [
    {
        id: 'product_1',
        name: 'Худи Lyle & Scott',
        image: 'https://ir.ozone.ru/s3/multimedia-1-3/wc600/7003884135.jpg',
        price: 4075,
        favorite: false
    }
];
export const getProducts = (): Promise<Product[]> => {
    return new Promise<Product[]>((resolve, reject) => {
        setTimeout (() => {
            resolve(PRODUCTS);
        }, 200);
    })
}