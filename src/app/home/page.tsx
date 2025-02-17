import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { TransactionTable } from "@/features/recent-transactions";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-extrabold">Welcome back, Marco!</h1>
      </div>

      <div className="flex py-8 flex-wrap gap-8">
        <Card className="flex-1 basis-64 border border-income">
          <CardHeader>
            <CardTitle>Current Balance</CardTitle>
            <CardDescription>Your remaining balance so far.</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className="font-bold text-3xl text-income">PHP 250,000</h1>
          </CardContent>
        </Card>
        <Card className="flex-1 basis-64 border border-expense">
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
            <CardDescription>Your total expenses so far.</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className="font-bold text-3xl text-expense">PHP 250,000</h1>
          </CardContent>
        </Card>
      </div>

      <TransactionTable />
    </div>
  );
}
