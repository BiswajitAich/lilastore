export default function NoImage (e: React.SyntheticEvent<HTMLImageElement, Event>)  {
    const target = e.target as HTMLImageElement;
    const img = new Image()
    img.src = "https://raw.githubusercontent.com/BiswajitAich/lilastore/main/public/images/some/no-image.webp"
    img.alt = "Image not found"
    img.onload = () => {
        target.src = img.src
        target.srcset = img.src
    }
    img.onerror = () =>{
        target.alt = img.alt;    
    }
}