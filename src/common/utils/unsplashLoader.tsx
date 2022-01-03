interface Loader {
  src: string;
  width: number;
}
export const unsplashLoader = ({ src, width }: Loader) => {
  return `https://source.unsplash.com/${src}/w=${width}`;
};
