import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TransactionForm } from "@/features/transaction-form";

const sampleTransactions = [
  {
    id: "MAR-001",
    transactionType: "Income",
    amount: "250.00",
    description: "Fun Stuff",
  },
  {
    id: "MAR-002",
    transactionType: "Income",
    amount: "150.00",
    description: "PayPal",
  },
  {
    id: "MAR-003",
    transactionType: "Expense",
    amount: "350.00",
    description: "Bank Transfer",
  },
  {
    id: "MAR-004",
    transactionType: "Income",
    amount: "450.00",
    description: "Fun Stuff",
  },
  {
    id: "MAR-005",
    transactionType: "Income",
    amount: "550.00",
    description: "PayPal",
  },
  {
    id: "MAR-006",
    transactionType: "Expense",
    amount: "200.00",
    description: "Bank Transfer",
  },
  {
    id: "MAR-007",
    transactionType: "Expense",
    amount: "300.00",
    description: "Fun Stuff",
  },
];
export default function TransactionTable() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Recent Transactions
        </h3>
        <TransactionForm />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Transaction Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-bold">{transaction.id}</TableCell>
              <TableCell>{transaction.transactionType}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell className="text-right">{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
