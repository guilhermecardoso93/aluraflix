import { useState } from "react";
import Notification from "../notification/Notification";
import ConfirmationDialog from "../confirmationDialog/ConfirmationDialog";
import Card from "../Card";
import "./Category.css";

export function Category({
  dados,
  cards,
  onCardClick,
  onCardDelete,
  onCardEdit,
}) {
  const { primaryColor, name } = dados;
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  const handleDelete = (cardId, cardTitle) => {
    setCardToDelete({ id: cardId, title: cardTitle });
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    if (cardToDelete) {
      onCardDelete(cardToDelete.id);
      setNotificationMessage(`"${cardToDelete.title}" eliminado corretamente.`);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setNotificationMessage("");
      }, 3000);
      setShowConfirmation(false);
      setCardToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setCardToDelete(null);
  };

  return (
    <>
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
      {showConfirmation && (
        <ConfirmationDialog
          message={`¿Estás seguro de que deseas eliminar "${cardToDelete?.title}" ?`}
          title={cardToDelete?.title}
          primaryColor={primaryColor}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      {cards && cards.length > 0 && (
        <section className="category">
          <h3
            className="category-title"
            style={{ backgroundColor: primaryColor }}
          >
            {name}
          </h3>
          <div className="card__container">
            {cards.map((card) => (
              <Card
                dados={card}
                key={card.id}
                primaryColor={primaryColor}
                onClick={() => onCardClick(card)}
                onDelete={() => handleDelete(card.id, card.title)}
                onEdit={() => onCardEdit(card)}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

Category.propTypes = {
  dados: PropTypes.shape({
    name: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardDelete: PropTypes.func.isRequired,
  onCardEdit: PropTypes.func.isRequired,
};
