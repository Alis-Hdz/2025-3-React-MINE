export default function AlbumForm() {
  return (
    <div>
      <h3>Crear un nuevo album</h3>

      <form>
        <div>
          <label>Titulo del album</label>

          <input
            type="text"
            id="albumTitle"
            name="albumTitle"
            placeholder="Ej. City Nights"
          />
        </div>

        <div>
          <label>Descripción del album</label>

          <textarea
            type="text"
            id="albumDescription"
            name="albumDescription"
            rows="3"
            placeholder="Describe el album"
          />
        </div>

        <div>
          <label>Imagenes del album</label>

          <div>
            <input
              type="url"
              id="imageUrl"
              name="imageName"
              placeholder="URL de la imagen"
            />

            <input
              type="text"
              id="imageTitle"
              name="imageTitle"
              placeholder="Nombre de la imagen"
            />

            <button>+</button>
          </div>
        </div>

        <div>
          <button type="submit">Crear album</button>
          <button type="button">Cancelar album</button>
        </div>
      </form>
    </div>
  );
}
