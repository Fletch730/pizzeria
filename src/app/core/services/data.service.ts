import { Injectable } from '@angular/core';
import { menu } from '../entity';

@Injectable({
  providedIn: 'root'
})
export class DataService {

pizzaItem=[{id:1,name:"MAGHERITA PIZZA",image:"../../../../assets/images/Speciality1.jpg",Description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
,price:450,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"BASIL"},
{id:2,name:"BARBEQUE PIZZA",image:"../../../../assets/images/Speciality1.jpg",Description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
,price:450,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"BARBEQUE CHUNKS"},
{id:3,name:"PEPPERONI PIZZA",image:"../../../../assets/images/Speciality1.jpg",Description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
,price:450,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"PEPPERONI"},
{id:4,name:"CHICKEN OVERLOADED PIZZA",image:"../../../../assets/images/Speciality1.jpg",Description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
,price:550,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"DIFFERENT CHICKEN FLAVOURS"},
{id:5,name:"PANEER PIZZA",image:"../../../../assets/images/Speciality2.jpg",Description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
,price:350,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"PANEER"},
{id:6,name:"MUSHROOM PIZZA",image:"../../../../assets/images/Speciality3.jpg",Description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
,price:350,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"MUSHROOM"},
{id:7,name:"VEG_OVERLOADED PIZZA",image:"../../../../assets/images/Speciality2.jpg",Description:"It was this chef who invented a dish called ''Pizza Margherita,'' to honour the Queen and the Kindgom of Italy,since the toppings--tomato(red), mozzarella (white) and basil (green)--represented the colours of its national flag."
,price:350,ingredient1:"SAUCE",ingredient2:"MOZERELLA",ingredient3:"VEGETABLE"}]

pastaItem=[{id:1,name:"FETTUCCINE PASTA",image:"../../../../assets/images/fettuccine.jpg",Description:"Fettuccine is a type of pasta popular in Roman and Tuscan cuisine. It is a flat, thick pasta traditionally made of egg and flour, narrower than, but similar to, the tagliatelle typical of Bologna. Spinach fettuccine is made from spinach, flour, and eggs."
,price:450,ingredient1:"CHEESE",ingredient2:"SPINACH",ingredient3:"EGGS"},
{id:2,name:"CAPELLINI PASTA",image:"../../../../assets/images/Capellini.jpg",Description:"Capellini is a very thin variety of Italian pasta, with a diameter between 0.85 and 0.92 millimetres. Like spaghetti, it is rod-shaped, in the form of long strands. Capelli d'angelo is a thinner variant with a diameter between 0.78 and 0.88 millimetres. It is often sold in a nest-like shape."
,price:450,ingredient1:"CHEESE",ingredient2:"ANGEL HAIR PASTA",ingredient3:"PASTA SAUCE"},
{id:3,name:"DITALINI PASTA",image:"../../../../assets/images/ditalini.jpg",Description:"Ditalini is a type of pasta that is shaped like small tubes. It has been described as 'thimble-sized' and as very 'short macaroni'. In some areas it is also called 'salad macaroni'. During the industrial age in Apulia, Italy, increased development of ditali and other short-cut pastas occurred. "
,price:450,ingredient1:"MACARANI",ingredient2:"MEAT BALLS",ingredient3:"PARMESAN"},
]

drinksItem=[{id:1,name:"PINA COLADA",image:"../../../../assets/images/pina.jpg",Description:"The piña colada is a sweet cocktail made with rum, cream of coconut or coconut milk, and pineapple juice, usually served either blended or shaken with ice. It may be garnished with either a pineapple wedge, maraschino cherry, or both. There are two versions of the drink, both originating in Puerto Rico."
,price:150,ingredient1:"PINEAPPLE",ingredient2:"COCONUT MILK",ingredient3:""},
{id:2,name:"MOJITO",image:"../../../../assets/images/mojito.jpg",Description:"Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavours is intended to complement the rum, and has made the mojito a popular summer drink."
,price:200,ingredient1:"MINT LEAVES",ingredient2:"RUM",ingredient3:"SODA WATER"},
{id:3,name:"ICE TEA",image:"../../../../assets/images/icetea.jpg",Description:"Iced tea is a form of cold tea. Though usually served in a glass with ice, it can refer to any tea that has been chilled or cooled. It may be sweetened with sugar, syrup and/or apple slices."
,price:100,ingredient1:"TEA",ingredient2:"ICE",ingredient3:""},
]

saladItem=[{id:1,name:"CAESAR SALAD",image:"../../../../assets/images/caesar.jpg",Description:"A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper. In its original form, this salad was prepared and served tableside."
,price:300,ingredient1:"VEGETABLE",ingredient2:"CHICKEN",ingredient3:"MAYONAISSE"},
{id:2,name:"COBB SALAD",image:"../../../../assets/images/cobbs.jpg",Description:"The Cobb salad is a main-dish American garden salad typically made with chopped salad greens, tomato, crisp bacon, grilled or roasted chicken breast, hard-boiled eggs, avocado, chives, Roquefort cheese, and red-wine vinaigrette."
,price:250,ingredient1:"BACON",ingredient2:"AVACADO",ingredient3:"RAQUEFORT CHEESE"},
{id:3,name:"NACOISE SALAD",image:"../../../../assets/images/nacoise.jpg",Description:"Salade niçoise, la salada nissarda in the Niçard dialect of the Occitan language, is a salad that originated in the French city of Nice. It is traditionally made of tomatoes, hard-boiled eggs, Niçoise olives and anchovies or tuna, dressed with olive oil."
,price:450,ingredient1:"EGG",ingredient2:"TOMATO",ingredient3:"OLIVES"},
]

dessertItem=[{id:1,name:"TIRAMUSU",image:"../../../../assets/images/tiramusu.jpg",Description:"Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa. The recipe has been adapted into many varieties of cakes and other desserts."
,price:250,ingredient1:"SAVOIARDE",ingredient2:"COCOA",ingredient3:"COFFEE"},
{id:2,name:"CUPCAKES",image:"../../../../assets/images/cupcakes.jpg",Description:"A cupcake is a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup. As with larger cakes, frosting and other cake decorations such as fruit and candy may be applied."
,price:150,ingredient1:"CINNAMON",ingredient2:"WHIP CREAM",ingredient3:"CHOCO CHIPS"},
{id:3,name:"CHOCOLATE MOUSSE",image:"../../../../assets/images/chocolate-mousse.jpg",Description:"Sweet mousses are typically made with whipped egg whites, whipped cream, or both, and flavored with one or more of chocolate, coffee, caramel, puréed fruits, or various herbs and spices, such as mint or vanilla."
,price:200,ingredient1:"CHOCOLATE",ingredient2:"VANILLA",ingredient3:""},
]



constructor() { }

getPizzaItems(){
 this.pizzaItem;

}
}
