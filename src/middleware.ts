// tout le site est protégé par le middleware next-auth/middleware pour gérer l'authentification
export { default } from "next-auth/middleware";

//ajoute une exception sur certaine page
export const config = { matcher: "/home" };
