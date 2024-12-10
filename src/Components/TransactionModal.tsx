import React from "react";

interface TransactionModalProps {
  isOpen: boolean; // Controls the visibility of the modal
  onClose: () => void; // Function to close the modal
  transactionDetails: {
    id: string;
    game: string;
    idplayer: string;
    items_payment: string;
    price: number;
    payment_method: string;
    createdAt: string;
  } | null; // Transaction details to display
}

const TransactionModal: React.FC<TransactionModalProps> = ({
  isOpen,
  onClose,
  transactionDetails,
}) => {
  if (!isOpen || !transactionDetails) {
    return null; // Render nothing if the modal is closed or no details are provided
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-3/4 md:w-1/3 rounded-lg shadow-lg p-5">
        <h2 className="text-xl font-bold text-center">Transaction Details</h2>
        <div className="mt-5 space-y-3">
          <div>
            <strong>ID:</strong> {transactionDetails.id}
          </div>
          <div>
            <strong>Game:</strong> {transactionDetails.game}
          </div>
          <div>
            <strong>Player ID:</strong> {transactionDetails.idplayer}
          </div>
          <div>
            <strong>Items:</strong> {transactionDetails.items_payment}
          </div>
          <div>
            <strong>Price:</strong> Rp {transactionDetails.price.toLocaleString()}
          </div>
          <div>
            <strong>Payment Method:</strong> {transactionDetails.payment_method}
          </div>
          <div>
            <strong>Date:</strong>{" "}
            {new Date(transactionDetails.createdAt).toLocaleString()}
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <button
            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
