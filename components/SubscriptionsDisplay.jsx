import useAuth from "@/context/AuthContext";
import { getDaysUntilNextCharge, subscriptions } from "@/utils";
import React from "react";

function SubscriptionsDisplay(props) {
  const { handleDeleteSubscription, userData } = useAuth();

  const { isAddEntry, handleToggleInput, handleEditSubscription } = props;

  if (!userData || !userData.subscriptions) {
    return null;
  }

  return (
    <section>
      <h2>Your Subscriptions</h2>
      <div className="card-container">
        {userData?.subscriptions.map((subscription, index) => {
          const {
            name,
            category,
            cost,
            currency,
            billingFrequency,
            startDate,
            notes,
            status,
          } = subscription;
          const daysRemaining = getDaysUntilNextCharge(
            startDate,
            billingFrequency
          );
          return (
            <div key={index} className="card subscription-card">
              <div>
                <h3>{name}</h3>
                <div
                  className={
                    "status " +
                    (status === "Active"
                      ? "card-button-primary"
                      : "card-button-secondary")
                  }
                >
                  <small>{status}</small>
                </div>
              </div>
              <p>
                <i>{category}</i>
              </p>
              <div className="sub-cost">
                <h2>₹{cost}</h2>
                <p>{currency}</p>
              </div>
              <small>per {billingFrequency}</small>
              <div className="sub-renewal">
                <div>
                  <p>Started</p>
                  <h4>{startDate}</h4>
                </div>
                <div>
                  <p>Time remaining</p>
                  <h4>
                    {daysRemaining} {daysRemaining === 1 ? "day" : "days"}
                  </h4>
                </div>
              </div>
              <div className="white-line" />
              <p>{notes}</p>
              <div className="subscription-actions">
                <button
                  className="button-card"
                  onClick={() => handleEditSubscription(index)}
                >
                  <i className="fa-solid fa-edit"></i>Edit
                </button>
                <button
                  className="button-card"
                  onClick={() => handleDeleteSubscription(index)}
                >
                  <i className="fa-solid fa-trash"></i>Delete
                </button>
              </div>
            </div>
          );
        })}
        {!isAddEntry && (
          <button
            onClick={handleToggleInput}
            className="button-card add-subscription"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        )}
      </div>
    </section>
  );
}

export default SubscriptionsDisplay;
