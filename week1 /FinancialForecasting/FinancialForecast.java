public class FinancialForecast {
    public static double futureValue(double initialAmount, double growthRate, int years) {
        if (years == 0) {
            return initialAmount;
        }
        return futureValue(initialAmount, growthRate, years - 1) * (1 + growthRate);
    }
    public static void main(String[] args) {
        double initial = 10000;       
        double rate = 0.05;            
        int period = 10;               
        double result = futureValue(initial, rate, period);
        System.out.printf("Future value after %d years: Rs.%.2f%n", period, result);
    }
}
