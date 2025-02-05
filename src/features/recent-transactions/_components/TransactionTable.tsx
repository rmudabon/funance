import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TransactionForm } from "@/features/transaction-form";
import z from "zod";

const transactionSchema = z.array(
  z.object({
    id: z.number(),
    transaction_type: z.number(),
    amount: z.string(),
    description: z.string(),
  })
);

const TRANSACTION_TYPES = ["Income", "Expense", "Transfer"];

async function getTransactions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/transactions/`,
    {
      next: { tags: ["transactions"] },
    }
  );
  const data = await res.json();
  const parseResult = transactionSchema.safeParse(data);
  if (!parseResult.success) {
    throw new Error(
      `There was an error fetching transactions. ${parseResult.error.message}`
    );
  }

  return parseResult.data;
}

export default async function TransactionTable() {
  const transactions = await getTransactions();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Recent Transactions
        </h3>
        <TransactionForm />
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Transaction Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Amount (PHP)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-bold py-4">
                  {transaction.id}
                </TableCell>
                <TableCell>
                  {TRANSACTION_TYPES[transaction.transaction_type]}
                </TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className="text-right">
                  {transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
