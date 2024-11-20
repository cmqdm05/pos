import React from 'react';
import { CreditCard, Wallet } from 'lucide-react';

interface PaymentModalProps {
  onPayment: (method: 'cash' | 'card') => void;
  onClose: () => void;
  total: number;
}

const PaymentModal = ({ onPayment, onClose, total }: PaymentModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2">Select Payment Method</h2>
        <p className="text-gray-500 mb-6">Total: ${total.toFixed(2)}</p>
        <div className="space-y-4">
          <button
            onClick={() => onPayment('cash')}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
          >
            <Wallet className="h-5 w-5" />
            Pay with Cash
          </button>
          <button
            onClick={() => onPayment('card')}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <CreditCard className="h-5 w-5" />
            Pay with Card
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;