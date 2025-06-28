package testing;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        int result = calc.multiply(2, 3);
        System.out.println("Multiplication result: " + result);
        assertEquals(6, result);
    }
}
