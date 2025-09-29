import React, { useEffect, useState } from "react";

function DisclaimerPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={{ marginBottom: "10px" }}>Disclaimer</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.5" }}>
          ⚠️ Important Disclaimer

          All property listings displayed on this website are provided by third-party sources.
          We do not guarantee the accuracy, authenticity, or availability of any property, price, or information.

          ⚠️ Warning: Users are strongly advised to verify all details independently and conduct due diligence before making payments, agreements, or commitments.

          This platform is not responsible for any fraud, misrepresentation, financial loss, or dispute that may occur.
          By continuing to use this website, you agree that all transactions and communications are undertaken at your own risk.

        </p>
        <button style={styles.button} onClick={handleAccept}>
          I Understand
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  button: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default DisclaimerPopup;
