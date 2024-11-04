import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Ejercicio4 {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.println("Introduce la cantidad de números aleatorios:");
        Integer cantidadNum = scn.nextInt();
        scn.nextLine(); 
        ArrayList<Integer> arrayRand = calcularNumRand(cantidadNum);
        System.out.println("Introduce la ruta destino:");
        String rutaDes = scn.nextLine();

        escribirFichero(rutaDes, arrayRand);
        leerFichero(rutaDes);
        scn.close();
    }

    public static ArrayList<Integer> calcularNumRand(Integer cant) {
        ArrayList<Integer> numerosRand = new ArrayList<>();
        Random random = new Random(); 

        for (int i = 0; i < cant; i++) {
            int numRand = random.nextInt(100); 
            numerosRand.add(numRand); 
        }
        return numerosRand;
    }

    public static void escribirFichero(String rutDes, ArrayList<Integer> numRand) {
        try (DataOutputStream writer = new DataOutputStream(new FileOutputStream(rutDes))) {
            for (Integer num : numRand) {
                writer.writeInt(num);
            }
            System.out.println("Texto escrito exitosamente en " + rutDes);
        } catch (IOException e) {
            System.err.println("Error al escribir en el fichero: " + e.getMessage());
        }
    }

    public static void leerFichero(String rutDes) {
        try (DataInputStream reader = new DataInputStream(new FileInputStream(rutDes))) {
            System.out.println("Contenido del fichero:");
            while (true) {
                try {
                    int num = reader.readInt(); 
                    System.out.println(num + "-");
                } catch (IOException e) {
                    break;
                }
            }
        } catch (IOException e) {
            System.err.println("Error al leer el fichero: " + e.getMessage());
        }
    }
}
