export default function NoImage (e: React.SyntheticEvent<HTMLImageElement, Event>)  {
    const target = e.target as HTMLImageElement;
    target.src = "https://raw.githubusercontent.com/BiswajitAich/lilastore/main/public/images/some/no-image.webp"
    target.alt = "Image not found"
}