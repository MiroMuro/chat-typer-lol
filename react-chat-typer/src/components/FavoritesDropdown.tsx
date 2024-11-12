const FavoritesDropdown = ({ favorites }: { favorites: string[] }) => {
  return (
    <div id="favorites" className="favoritesDropDown">
      <label htmlFor="favorites">Favorites:</label>
      {!favorites && <p>No favorites yet</p>} :{" "}
      {favorites.map((favorite) => (
        <p>{favorite}</p>
      ))}
    </div>
  );
};
export default FavoritesDropdown;
