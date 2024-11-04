import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Scanner;

public class Ejercicio6 {
    private static String RUTA_FICHERO = "D:\\Users\\m\\Ejercicio6.dat";

    public static void main(String[] args) {
        try (Scanner scn = new Scanner(System.in)) {
            int opcion;
            do {
                System.out.println("\nMenú de opciones:");
                System.out.println("1. Añadir número al principio del fichero");
                System.out.println("2. Añadir número al final del fichero");
                System.out.println("3. Mostrar contenido del fichero");
                System.out.println("4. Sustituir un número");
                System.out.println("0. Salir");
                System.out.print("Elige una opción: ");
                opcion = scn.nextInt();

                switch (opcion) {
                    case 1 -> añadirAlPrincipio();
                    case 2 -> añadirAlFinal(scn);
                    case 3 -> mostrarFichero();
                    case 4 -> sustituirNumero(scn);
                    case 0 -> System.out.println("Saliendo del programa...");
                    default -> System.out.println("Opción no válida. Intente de nuevo.");
                }
            } while (opcion != 0);
        }
    }
    private static void añadirAlPrincipio() {
        try (RandomAccessFile raf = new RandomAccessFile(RUTA_FICHERO, "rw")) {
            byte[] contenido = new byte[(int) raf.length()];
            raf.readFully(contenido);
            System.out.print("Introduce el número que quieres añadir al principio: ");
            Scanner scn = new Scanner(System.in);
            double numero = scn.nextDouble();
            raf.seek(0);
            raf.writeDouble(numero);
            raf.write(contenido);

            System.out.println("Número añadido al principio del fichero.");
        } catch (IOException e) {
            System.err.println("Error al escribir al inicio del fichero: " + e.getMessage());
        }
    }

    private static void añadirAlFinal(Scanner scn) {
        try (RandomAccessFile raf = new RandomAccessFile(RUTA_FICHERO, "rw")) {
            System.out.print("Introduce el número que quieres añadir al final: ");
            double numero = scn.nextDouble();

            raf.seek(raf.length()); 
            raf.writeDouble(numero); 

            System.out.println("Número añadido al final del fichero.");
        } catch (IOException e) {
            System.err.println("Error al escribir al final del fichero: " + e.getMessage());
        }
    }

    
    private static void mostrarFichero() {
        try (RandomAccessFile raf = new RandomAccessFile(RUTA_FICHERO, "r")) {
            System.out.println("Contenido del fichero:");
            raf.seek(0); 

            while (raf.getFilePointer() < raf.length()) {
                double numero = raf.readDouble();
                System.out.println(numero);
            }
        } catch (IOException e) {
            System.err.println("Error al leer el fichero: " + e.getMessage());
        }
    }

    private static void sustituirNumero(Scanner scn) {
        try (RandomAccessFile raf = new RandomAccessFile(RUTA_FICHERO, "rw")) {
            System.out.print("Introduce el número que deseas sustituir: ");
            double numAntiguo = scn.nextDouble();
            System.out.print("Introduce el nuevo número: ");
            double numNuevo = scn.nextDouble();

            boolean encontrado = false;
            raf.seek(0);

            while (raf.getFilePointer() < raf.length()) {
                long posicion = raf.getFilePointer();
                double numero = raf.readDouble();

                if (numero == numAntiguo) {
                    raf.seek(posicion); 
                    raf.writeDouble(numNuevo);
                    encontrado = true;
                    System.out.println("Número sustituido correctamente.");
                    break;
                }
            }
            if (!encontrado) {
                System.out.println("Número no encontrado en el fichero.");
            }
        } catch (IOException e) {
            System.err.println("Error al sustituir el número: " + e.getMessage());
        }
    }
}
