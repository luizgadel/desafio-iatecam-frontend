import { Product } from "./product.interface";
import { Sale } from "./sales.interface";
import { User } from "./user.interface";

export const users: Array<User> = [
    {
        name: "administrador",
        email: "admin@email.com",
        password: "123456",
        userId: "1"
    },
    {
        name: "Luiz Gadelha",
        email: "luiz@dev.com",
        password: "luizdev",
        userId: "2"
    },
]

export const products: Array<Product> = [
    {
        description: "Smartphone Samsung Galaxy A03",
        value: 900,
        categoryId: 1,
        quantity: 1,
        productId: "1"
    },
    {
        description: "Smart TV LG 32LG621CB5B",
        value: 45,
        categoryId: 2,
        quantity: 15,
        productId: "2"
    },
    {
        description: "Fritadeira Easy Fry 3,2L Red Arno",
        value: 2200,
        categoryId: 3,
        quantity: 6,
        productId: "3"
    },
    {
        description: "Celular Iphone 11 5G",
        value: 150,
        categoryId: 4,
        quantity: 120,
        productId: "4",
    },
    {
        description: "CD Caprichoso 2023",
        value: 50,
        categoryId: 5,
        quantity: 1000,
        productId: "5"
    },
    {
        description: "CD Garantido 2023",
        value: 50,
        categoryId: 5,
        quantity: 2000,
        productId: "6"
    },

]

export const sales: Array<Sale> = [
    {
        saleId: "1",
        saleDate: "01/07/2023",
        saleHour: "10:30",
        productDescription: "Smartphone Samsung Galaxy A03",
        clientName: "Rafael Castro",
        salesmanName: "Fernando Oliveira",
        observations: "Entregar na casa do Cliente",
    },
    {
        saleId: "2",
        saleDate: "01/07/2023",
        saleHour: "11:00",
        productDescription: "Smart TV LG 32LG621CB5B",
        clientName: "Luana Oliveira",
        salesmanName: "Beatriz Silva",
        observations: "-",
    },
    {
        saleId: "3",
        saleDate: "01/07/2023",
        saleHour: "11:20",
        productDescription: "Fritadeira Easy Fry 3,2L Red Arno",
        clientName: "Amanda Silve",
        salesmanName: "Fernando Oliveira",
        observations: "-",
    },
    {
        saleId: "4",
        saleDate: "01/07/2023",
        saleHour: "14:30",
        productDescription: "Celular Iphone 11 5G",
        clientName: "Luís Felipe",
        salesmanName: "Beatriz Silva",
        observations: "Retirada no balcão",
    }
]