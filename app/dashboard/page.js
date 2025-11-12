"use client";

import Login from "@/components/Login";
import SubscriptionForm from "@/components/SubscriptionForm";
import SubscriptionsDisplay from "@/components/SubscriptionsDisplay";
import Summary from "@/components/Summary";
import useAuth from "@/context/AuthContext";
import { Suspense, useState } from "react";

function DashboardPage() {
  const { userData, handleDeleteSubscription, currentUser, loading } =
    useAuth();

  const isAuthenticated = !!currentUser;
  const [isAddEntry, setIsAddEntry] = useState(false);
  const blankSubscription = {
    name: "",
    category: "Entertainment",
    cost: "",
    currency: "INR",
    billingFrequency: "Monthly",
    nextBillingDate: "",
    paymentMethod: "UPI",
    startDate: "",
    renewalType: "",
    status: "Active",
    notes: "",
  };

  const [formData, setFormData] = useState(blankSubscription);

  function handleChangeInput(event) {
    const newData = { ...formData, [event.target.name]: event.target.value };
    setFormData(newData);
  }

  function handleEditSubscription(index) {
    const data = userData.subscriptions.find((val, valIndex) => {
      return valIndex === index;
    });

    setFormData(data);
    setIsAddEntry(true);
    handleDeleteSubscription(index);
  }

  function handleResetForm() {
    setFormData(blankSubscription);
  }

  function handleToggleInput() {
    setIsAddEntry(!isAddEntry);
  }

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (!isAuthenticated) {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <Login />;
      </Suspense>
    );
  }

  return (
    <>
      <Summary />
      <SubscriptionsDisplay
        isAddEntry={isAddEntry}
        handleToggleInput={handleToggleInput}
        handleEditSubscription={handleEditSubscription}
      />
      {isAddEntry && (
        <SubscriptionForm
          closeInput={handleToggleInput}
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleResetForm={handleResetForm}
        />
      )}
    </>
  );
}

export default DashboardPage;
