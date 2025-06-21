import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Book", "Education"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "Shoes", "Footwear")
        };
        Product result1 = SearchAlgorithm.linearSearch(products, "Book");
        System.out.println("Linear Search: " + (result1 != null ? result1 : "Product not found"));
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        Product result2 = SearchAlgorithm.binarySearch(products, "Book");
        System.out.println("Binary Search: " + (result2 != null ? result2 : "Product not found"));
    }
}

