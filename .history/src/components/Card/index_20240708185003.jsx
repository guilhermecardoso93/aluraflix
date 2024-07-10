import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import "./Card.css";

export function Card({ dados, primaryColor, onClick, onDelete, onEdit }) {
  const { title, photo } = dados;

  const handleClick = () => {
    onClick();
    const bannerElement = document.getElementById("banner");
    if (bannerElement) {
      bannerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="card"
      style={{ cursor: "pointer", "--primary-color": primaryColor }}
    >
      <figure className="card__header">
        <img
          src={photo}
          alt={title}
          onClick={handleClick}
          className="card__image"
        />
        <figcaption className="card__icons">
          <div
            className="card__icon-wrapper card-icon-delete"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <RiDeleteBin2Line className="card__icon" />
            <span className="card__icon-text">BORRAR</span>
          </div>
          <div
            className="card__icon-wrapper card-icon-edit"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(dados);
            }}
          >
            <RiEdit2Line className="card__icon" />
            <span className="card__icon-text">EDITAR</span>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
