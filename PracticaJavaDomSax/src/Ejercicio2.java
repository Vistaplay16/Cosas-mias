import java.io.FileWriter;
import java.io.FileReader;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Ejercicio2 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Introduce la ruta del fichero: ");
        String rutaFichero = scanner.nextLine();
        System.out.print("Introduce el texto que deseas escribir en el fichero: ");
        String texto = scanner.nextLine();
        escribirFich(rutaFichero, texto);
        mosMinusculas(rutaFichero);
        scanner.close();
    }
    
    public static void escribirFich(String ruta, String texto) {
        try (FileWriter writer = new FileWriter(ruta)) {
            writer.write(texto);
            System.out.println("Texto escrito exitosamente.");
        } catch (IOException e) {
            System.err.println("Error al escribir en el fichero: " + e.getMessage());
        }
    }
    
    
    public static void mosMinusculas(String ruta) {
        try (FileReader reader = new FileReader(ruta)) {
            int caracter;
            System.out.println("Contenido del fichero en minúsculas:");
            while ((caracter = reader.read()) != -1) {
                System.out.print(Character.toLowerCase((char) caracter));
            }
            System.out.println();
        } catch (IOException e) {
            System.err.println("Error al leer el fichero: " + e.getMessage());
        }
    }
}
