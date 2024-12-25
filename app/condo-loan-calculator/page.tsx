'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AmortizationSchedule from './AmortizationSchedule'

export default function CondoLoanCalculatorPage() {
    const [loanAmount, setLoanAmount] = useState<number>(0)
    const [interestRate, setInterestRate] = useState<number>(0)
    const [loanTerm, setLoanTerm] = useState<number>(0)
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null)
    const [showAmortization, setShowAmortization] = useState<boolean>(false)

    const calculateLoan = (e: React.FormEvent) => {
        e.preventDefault()

        const monthlyInterestRate = interestRate / 100 / 12
        const totalPayments = loanTerm * 12

        const monthlyPayment =
            (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
            (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)

        setMonthlyPayment(monthlyPayment)
        setShowAmortization(true)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Condo Loan Calculator</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Loan Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={calculateLoan} className="space-y-4">
                            <div>
                                <Label htmlFor="loanAmount">Loan Amount (PHP)</Label>
                                <Input
                                    id="loanAmount"
                                    type="number"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
                                <Input
                                    id="interestRate"
                                    type="number"
                                    step="0.01"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                                <Input
                                    id="loanTerm"
                                    type="number"
                                    value={loanTerm}
                                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">Calculate</Button>
                        </form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Loan Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {monthlyPayment !== null && (
                            <div className="space-y-4">
                                <div>
                                    <Label>Monthly Payment</Label>
                                    <p className="text-2xl font-bold">₱{monthlyPayment.toFixed(2)}</p>
                                </div>
                                <div>
                                    <Label>Total Payment</Label>
                                    <p className="text-xl">₱{(monthlyPayment * loanTerm * 12).toFixed(2)}</p>
                                </div>
                                <div>
                                    <Label>Total Interest</Label>
                                    <p className="text-xl">₱{((monthlyPayment * loanTerm * 12) - loanAmount).toFixed(2)}</p>
                                </div>
                            </div>
                        )}
                        {monthlyPayment === null && (
                            <p className="text-gray-500">Enter loan details and click Calculate to see the loan summary.</p>
                        )}
                    </CardContent>
                </Card>
            </div>

            {showAmortization && (
                <AmortizationSchedule
                    loanAmount={loanAmount}
                    interestRate={interestRate}
                    loanTerm={loanTerm}
                />
            )}
        </div>
    )
}

