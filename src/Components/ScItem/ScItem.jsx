import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Scitem.css";

export const ScItem = ({ sch, onClose, onToggleFavorite, isFav }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <h2 className="modal-title">{sch.name}</h2>
        </div>
        <div className="modal-body two-column">
          <div className="modal-left-column">
            <p>
              <strong>Organization:</strong> {sch.organization}
            </p>
            <p>
              <strong>Details:</strong> {sch.purposes}
            </p>
            <p>
              <strong>Level of Study:</strong> {sch["level of study"]}
            </p>
          </div>
          <div className="modal-right-column">
            <p className="highlight">
              <strong>Award Amount:</strong> {sch["award amount"]}
            </p>
            <p className="highlight">
              <strong>Deadline:</strong> {sch.deadline}
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-action-button" onClick={onToggleFavorite}>
            <FontAwesomeIcon
              icon={isFav ? faHeartCircleCheck : faHeart}
              className="col-span-1 fa-2x heart-icon hover:scale-125 transition-all hover:cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScItem;
