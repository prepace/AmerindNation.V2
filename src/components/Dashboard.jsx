'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Initialize the Supabase client.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [financialData, setFinancialData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Query the view "financial_data" which returns one row with a JSON object in "data"
      const { data, error } = await supabase
        .from('financial_data')
        .select('data')
        .single();
      if (error) {
        console.error('Error fetching financial data:', error);
      } else {
        setFinancialData(data.data);
      }
    }
    fetchData();
  }, []);

  if (!financialData) {
    return <div>Loading...</div>;
  }

  // Destructure the JSON data.
  const { dailyBalanceData, depositsData, withdrawalsData } = financialData;

  // Calculate monthly totals.
  const totalDeposits = depositsData.reduce((sum, item) => sum + Number(item.amount), 0);
  const totalWithdrawals = withdrawalsData.reduce((sum, item) => sum + Number(item.amount), 0);
  const beginningBalance = dailyBalanceData.length > 0 ? Number(dailyBalanceData[0].balance) : 0;
  const endingBalance = dailyBalanceData.length > 0 ? Number(dailyBalanceData[dailyBalanceData.length - 1].balance) : 0;
  const netCashFlow = endingBalance - beginningBalance;

  return (
    <div className="flex flex-col space-y-6 p-6 bg-slate-50 max-w-7xl m-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Vizion Environmental Solutions LLC</h1>
        <div className="text-sm text-gray-500">Account: 10040906 | January 2024</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Beginning Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${beginningBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-gray-500">as of 01/01/2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ending Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${endingBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-gray-500">as of 01/31/2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Net Cash Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {netCashFlow >= 0 ? '+' : ''}{netCashFlow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-gray-500">for January 2024</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${totalDeposits.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-gray-500">{depositsData.length} deposits/credits</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Debits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              ${totalWithdrawals.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-gray-500">{withdrawalsData.length} withdrawals/debits</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="summary" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="summary">Account Summary</TabsTrigger>
          <TabsTrigger value="balance">Daily Balance</TabsTrigger>
          <TabsTrigger value="transactions">Major Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Balance Trend</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyBalanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 'Balance']} />
                  <Legend />
                  <Line type="monotone" dataKey="balance" stroke="#2563eb" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>POS/Everyday Expense Categories</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 'Amount']} />
                  <Legend />
                  <Bar dataKey="total" fill="#16a34a" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="balance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dailyBalanceData.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{item.date}</td>
                        <td className="px-4 py-2 text-right">
                          ${Number(item.balance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Major Deposits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-right">Amount</th>
                      <th className="px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {depositsData
                      .sort((a, b) => b.amount - a.amount)
                      .map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2">{item.date}</td>
                          <td className="px-4 py-2 text-right text-green-600">
                            ${Number(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                          <td className="px-4 py-2">{item.description}</td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Major Withdrawals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-right">Amount</th>
                      <th className="px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawalsData
                      .sort((a, b) => b.amount - a.amount)
                      .map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2">{item.date}</td>
                          <td className="px-4 py-2 text-right text-red-600">
                            ${Number(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                          <td className="px-4 py-2">{item.description}</td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-xs text-gray-500 mt-4">
        <p>Source: First National Bank & Trust Co. | Account 10040906 | January 2024 Statement</p>
      </div>
    </div>
  );
};

export default Dashboard;
