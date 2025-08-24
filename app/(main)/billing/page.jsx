"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PayButton from "./_components/PayButton";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function BillingPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Billing</h1>
      <p className="text-muted-foreground">Manage your Payment and credits</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Side - Credits */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Your Credits</CardTitle>
            <p className="text-sm text-muted-foreground">
              Current usage and remaining credits
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center border rounded-lg p-6">
              <span className="text-xl font-semibold text-blue-600">
                3 interviews left
              </span>
            </div>
            {/* <Button className="w-full">+ Add More Credits</Button> */}
          </CardContent>
        </Card>

        {/* Right Side - Purchase Plans */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Purchase Credits</CardTitle>
            <p className="text-sm text-muted-foreground">
              Add more interview credits to your account
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Basic Plan */}
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <p className="text-2xl font-bold">$5</p>
                  <p className="text-sm text-muted-foreground">20 interviews</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="text-sm space-y-1">
                    <li>• Basic interview templates</li>
                    <li>• Email support</li>
                  </ul>
                  {/* <Button className="w-full mt-3">Purchase Credits</Button> */}
                  <PayButton amount={5} credits={20}/>
                </CardContent>
              </Card>

              {/* Standard Plan */}
              <Card className="border-2 border-blue-500 shadow-md">
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                  <p className="text-2xl font-bold">$12</p>
                  <p className="text-sm text-muted-foreground">50 interviews</p>
                  <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="text-sm space-y-1">
                    <li>• All interview templates</li>
                    <li>• Priority support</li>
                    <li>• Basic analytics</li>
                  </ul>
                  {/* <Button className="w-full mt-3">Purchase Credits</Button> */}
                    <PayButton amount={12} credits={50}/>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <p className="text-2xl font-bold">$25</p>
                  <p className="text-sm text-muted-foreground">120 interviews</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="text-sm space-y-1">
                    <li>• All interview templates</li>
                    <li>• 24/7 support</li>
                    <li>• Advanced analytics</li>
                  </ul>
                    <PayButton amount={25} credits={120}/>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
