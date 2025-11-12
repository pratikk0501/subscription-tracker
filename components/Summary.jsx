import useAuth from "@/context/AuthContext";
import { calculateSubscriptionMetrics, subscriptions } from "@/utils";
import React from "react";

function Summary() {
  const { userData } = useAuth();

  const summary = calculateSubscriptionMetrics(userData.subscriptions);

  const emojis = [
    "🔥",
    "✅",
    "⭐️",
    "⚡️",
    "🎉",
    "✨",
    "🏆",
    "🌼",
    "🌱",
    "🐛",
    "🐙",
    "🪼",
  ];

  return (
    <section>
      <h2>Subscription Analytics</h2>
      <div className="analytics-card">
        {Object.keys(summary).map((key, index) => {
          return (
            <div key={index} className="analytics-item">
              <p>
                {emojis[index]} {key.replaceAll("_", " ")}
              </p>
              <h4>{summary[key]}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Summary;
