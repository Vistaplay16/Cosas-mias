import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Ejercicio3 {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.println("Introduce la ruta del fichero 1:");
        String rutFich1 = scn.nextLine();
        System.out.println("Introduce la ruta del fichero 2:");
        String rutFich2 = scn.nextLine();

        // Obtener solo los nombres de los archivos
        String nombreFich1 = new File(rutFich1).getName();
        String nombreFich2 = new File(rutFich2).getName();

        // Crear el nombre del archivo de destino
        String nombreArchivoDestino = nombreFich1 + "_" + nombreFich2;

        // Pedir la ruta del directorio donde se guardará el archivo combinado
        System.out.println("Introduce la ruta del directorio de destino:");
        String rutaDestino = scn.nextLine();

        // Asegurarse de que la ruta de destino termine con un separador
        if (!rutaDestino.endsWith(File.separator)) {
            rutaDestino += File.separator;
        }

        // Crear la ruta completa del archivo de destino
        String rutaDes = rutaDestino + nombreArchivoDestino;

        // Llamar a la función para copiar los contenidos
        copiarDosFicheros(rutFich1, rutFich2, rutaDes);
        scn.close();
    }

    public static void copiarDosFicheros(String rutFichero1, String rutFichero2, String rutaDes) {
        try (FileReader reader1 = new FileReader(rutFichero1);
             FileReader reader2 = new FileReader(rutFichero2);
             FileWriter writer = new FileWriter(rutaDes)) {  // Mover FileWriter aquí

            int caracter;
            StringBuilder contenidoTotal = new StringBuilder();

            System.out.println("Introduce el fichero 1:");
            while ((caracter = reader1.read()) != -1) {
                System.out.print((char) caracter);
                contenidoTotal.append((char) caracter);
            }
            System.out.println();

            System.out.println("Introduce el fichero 2:");
            while ((caracter = reader2.read()) != -1) {
                System.out.print((char) caracter);
                contenidoTotal.append((char) caracter);
            }
            System.out.println();

            writer.write(contenidoTotal.toString());
            System.out.println("Texto escrito exitosamente en " + rutaDes);
        } catch (IOException e) {
            System.err.println("Error al leer o escribir el fichero: " + e.getMessage());
        }
    }
}
