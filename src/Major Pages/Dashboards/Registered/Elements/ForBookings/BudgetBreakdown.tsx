"use client"

import type React from "react"
import { useMemo, useState, useEffect } from "react"
import { Car } from "lucide-react"

interface BudgetItem {
  name: string
  amount: number
}

interface BudgetBreakdownProps {
  items?: BudgetItem[]
  additionalExpenses?: number // For any expenses not in the items list
}

const BudgetBreakdown: React.FC<BudgetBreakdownProps> = ({
  items = [
    { name: "Artist Transportation", amount: -230 },
    { name: "Artist Transportation", amount: -230 },
    { name: "Artist Transportation", amount: -230 },
    { name: "Artist Transportation", amount: -230 },
    { name: "Artist Transportation", amount: -230 },
    { name: "Artist Transportation", amount: -230 },
    { name: "Artist Transportation", amount: -230 },
  ],
  additionalExpenses = 0, // Base expenses
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  // Calculate total expenses from items plus any additional expenses
  const totalExpense = useMemo(() => {
    const itemsTotal = items.reduce((sum, item) => {
      // For expenses (negative amounts), we add their absolute value
      const expenseValue = item.amount < 0 ? Math.abs(item.amount) : item.amount
      return sum + expenseValue
    }, 0)
    return additionalExpenses + itemsTotal
  }, [items, additionalExpenses])

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  return (
    <>
      {/* Clickable Card */}
      <div
        className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setIsModalOpen(true)}
      >
        <h3 className="text-lg font-medium mb-2">Budget Breakdown</h3>

        <div className="mb-4">
          <div className="text-sm text-gray-500">Total Expenses</div>
          <div className="text-xl font-bold text-red-600">Php {formatCurrency(totalExpense)}</div>
        </div>

        {/* Scrollable container for budget items */}
        <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-1 rounded-full">
                  <Car size={16} className="text-gray-600" />
                </div>
                <span>{item.name}</span>
              </div>
              <span className="text-red-600 font-medium">-{formatCurrency(Math.abs(item.amount))}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal matching the mockup exactly */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg w-full max-w-[500px] overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5">
              <h2 className="text-xl font-bold mb-4">Budget Breakdown</h2>

              {/* Total Expense with Wallet Icon */}
              <div className="bg-gray-100 p-4 mb-4 flex items-start">
                <div className="mr-3 mt-0.5">
                  <WalletIcon />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Expense</div>
                  <div className="text-lg font-bold text-red-600">Php {totalExpense.toLocaleString()}</div>
                </div>
              </div>

              {/* List of expenses */}
              <div className="max-h-[300px] overflow-y-auto mb-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-black rounded-full mr-3 flex items-center justify-center">
                        <Car size={14} className="text-white" />
                      </div>
                      <span>{item.name}</span>
                    </div>
                    <span className="text-red-600 font-medium">-{formatCurrency(Math.abs(item.amount))}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with buttons */}
            <div className="flex border-t">
              <button className="flex-1 py-3 text-center hover:bg-gray-50" onClick={() => setIsModalOpen(false)}>
                Back
              </button>
              <button className="flex-1 py-3 text-center text-white bg-blue-600 hover:bg-blue-700">Add Service</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Custom Wallet Icon component that matches the mockup
const WalletIcon = () => (
  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.5 6.5H4.5C3.4 6.5 2.5 7.4 2.5 8.5V17.5C2.5 18.6 3.4 19.5 4.5 19.5H19.5C20.6 19.5 21.5 18.6 21.5 17.5V8.5C21.5 7.4 20.6 6.5 19.5 6.5Z"
      stroke="#333333"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M2.5 10.5H21.5" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="17.5" cy="15.5" r="1" fill="#333333" />
  </svg>
)

export default BudgetBreakdown
