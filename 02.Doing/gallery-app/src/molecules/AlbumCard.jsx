import DeleteButton from "../atoms/DeleteButton";
import PlayButton from "../atoms/PlayButton";
import TagButton from "../atoms/TagButton";

export default function AlbumCard({ album }) {
  return (
    <div>
      {album && album.images.lenght > 0 ? ( 
        album.images.map((img) => {  /*Después de cada .map se debe colocar un return */
          return <img src={img.url} alt={img.name} />;
        })
      ) : (
        <p>No hay imágenes para mostrar en este album</p>
      )}

      <h3>{album.title}</h3>
      <p>{album.description}</p>
      <TagButton />
      <PlayButton />
      <DeleteButton />
    </div>
  );
}
