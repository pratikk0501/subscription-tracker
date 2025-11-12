"use client";
import useAuth from "@/context/AuthContext";
import { useState } from "react";

function SubscriptionForm(props) {
  const { handleAddSubscription } = useAuth();

  const { closeInput, formData, handleChangeInput, handleResetForm } = props;

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior of reloading the page

    handleAddSubscription(formData);
    handleResetForm();
    closeInput();
  }

  return (
    <section>
      <h2>Add a new subscription</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          <span>Subscription Name</span>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Netfilx, Spotify, Disney+"
            value={formData.name}
            onChange={handleChangeInput}
          />
        </label>
        <label>
          <span>Category</span>
          <select
            name="category"
            value={formData.category}
            onChange={handleChangeInput}
          >
            {[
              "Entertainment",
              "Music",
              "Software",
              "Web Services",
              "Health & Fitness",
              "Other",
            ].map((category, catIndex) => {
              return (
                <option key={catIndex} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>Cost</span>
          <input
            type="number"
            name="cost"
            step="1"
            required
            placeholder="e.g. 499"
            value={formData.cost}
            onChange={handleChangeInput}
          />
        </label>
        <label>
          <span>Currency</span>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChangeInput}
          >
            {[
              "INR",
              "SGD",
              "USD",
              "EUR",
              "GBP",
              "JPY",
              "AUD",
              "NZD",
              "Other",
            ].map((currency, currIndex) => {
              return (
                <option key={currIndex} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>Billing Frequency</span>
          <select
            name="billingFrequency"
            value={formData.billingFrequency}
            onChange={handleChangeInput}
          >
            {["Monthly", "Yearly", "Quarterly", "One-time"].map(
              (freq, freqIndex) => {
                return (
                  <option key={freqIndex} value={freq}>
                    {freq}
                  </option>
                );
              }
            )}
          </select>
        </label>
        <label>
          <span>Payment Method</span>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChangeInput}
          >
            {[
              "UPI",
              "Credit Card",
              "Debit Card",
              "Paypal",
              "Bank Transfer",
              "Other",
            ].map((method, methodIndex) => {
              return (
                <option key={methodIndex} value={method}>
                  {method}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>Subscription Start Date</span>
          <input
            type="date"
            name="startDate"
            required
            value={formData.startDate}
            onChange={handleChangeInput}
          />
        </label>
        <label>
          <span>Status</span>
          <select
            name="status"
            value={formData.status}
            onChange={handleChangeInput}
          >
            {["Active", "Paused", "Cancelled"].map((status, statusIndex) => {
              return (
                <option key={statusIndex} value={status}>
                  {status}
                </option>
              );
            })}
          </select>
        </label>
        <label className="fat-column">
          <span>Notes</span>
          <textarea
            name="notes"
            placeholder="e.g. Shared with family, includes cloud storage"
            value={formData.notes}
            onChange={handleChangeInput}
          />
        </label>
        <div className="fat-column form-submit-btns">
          <button onClick={closeInput}>Cancel</button>
          <button type="submit">Add subscription</button>
        </div>
      </form>
    </section>
  );
}

export default SubscriptionForm;
