import React from "react";
import { formatPrice } from "../utils/formatPrice";

export default function KitCard({ kit, navigate }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={kit.image} className="card-img-top" alt={kit.name} />

      <div className="card-body">
        <h5 className="card-title">{kit.name}</h5>
        <p className="card-text">{formatPrice(kit.price)}</p>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/detalle", kit.id)}
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
}
