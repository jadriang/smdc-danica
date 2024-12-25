import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface AmortizationScheduleProps {
    loanAmount: number
    interestRate: number
    loanTerm: number
}

export default function AmortizationSchedule({ loanAmount, interestRate, loanTerm }: AmortizationScheduleProps) {
    const monthlyInterestRate = interestRate / 100 / 12
    const totalPayments = loanTerm * 12
    const monthlyPayment =
        (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)

    const schedule = []
    let remainingBalance = loanAmount

    for (let month = 1; month <= totalPayments; month++) {
        const interestPayment = remainingBalance * monthlyInterestRate
        const principalPayment = monthlyPayment - interestPayment
        remainingBalance -= principalPayment

        schedule.push({
            month,
            payment: monthlyPayment,
            principalPayment,
            interestPayment,
            remainingBalance,
        })
    }

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Amortization Schedule</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Month</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Principal</TableHead>
                        <TableHead>Interest</TableHead>
                        <TableHead>Remaining Balance</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {schedule.map((row) => (
                        <TableRow key={row.month}>
                            <TableCell>{row.month}</TableCell>
                            <TableCell>₱{row.payment.toFixed(2)}</TableCell>
                            <TableCell>₱{row.principalPayment.toFixed(2)}</TableCell>
                            <TableCell>₱{row.interestPayment.toFixed(2)}</TableCell>
                            <TableCell>₱{row.remainingBalance.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

