import { useState } from "react";
import { Notification } from "../Notification";
import { Card } from "../Card";
import { ConfirmationDialog } from "../ConfirmationDialog";

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
      setNotificationMessage(`"${cardToDelete.title}" removido corretamente.`);
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
          message={`Tem certeza de que deseja excluir "${cardToDelete?.title}" ?`}
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
