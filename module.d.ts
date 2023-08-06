declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare module "*.svg" {
  const res: Record<string, string>;
  export default res;
}
