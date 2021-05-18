export interface menu {
   id:number;
   name:string;
   image:string
   ingredient1:string;
   ingredient2:string;
   ingredient3:string;
   price:number;
   description:string,
}

export interface user{
   name:string;
   email:string;
   password:string;
   phone:string
   pincode:number;
   city:string;
   landmark:string;
   houseNo?:number
}