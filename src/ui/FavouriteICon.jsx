import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FavouriteICon() {
  const [isFavoured, setIsFavoured] = useState(false);

  function handleIsFavoured() {
    setIsFavoured(!isFavoured);
  }
  return (
    <IconButton
      role="button"
      aria-label="add to favorites"
      onClick={() => handleIsFavoured()}
    >
      <FavoriteIcon
        sx={{
          color: isFavoured ? "red" : "",
        }}
      />
    </IconButton>
  );
}

export default FavouriteICon;
