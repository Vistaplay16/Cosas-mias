import java.io.File;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;

public class Ejercicio1 {

    public static void main(String[] args) {
        String nombreArchivo = "ejericio1.txt";
        String contenido = "Hola mundo, soy victor";
        crearArchivo(nombreArchivo, contenido);
        leerYMostrarSinEspacios(nombreArchivo);
    }

    public static void crearArchivo(String nombreArchivo, String contenido) {
        try (FileWriter writer = new FileWriter(nombreArchivo)) {
            writer.write(contenido);
            System.out.println("Exito");
        } catch (IOException e) {
            System.err.println("Error al crear el archivo: ");
        }
    }

    public static void leerYMostrarSinEspacios(String nombreArchivo) {
        try (FileReader reader = new FileReader(nombreArchivo)) {
            int caracter;
            System.out.println("Contenido:");
            while ((caracter = reader.read()) != -1) {
                if (caracter != ' ') { 
                    System.out.print((char) caracter);
                }
            }
            System.out.println();
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
