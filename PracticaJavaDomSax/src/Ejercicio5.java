import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;

class Coche {
    String matricula;
    String marca;
    Double deposito;
    String modelo;
	public Coche(String matricula, String marca, Double deposito, String modelo) {
		this.matricula = matricula;
		this.marca = marca;
		this.deposito = deposito;
		this.modelo = modelo;
	}
    
}

public class Ejercicio5 {
    public static void main(String[] args) {
        Scanner scn=new Scanner(System.in);
        System.out.println("Introduce la matricula de tu coche:");
        String matricula=scn.nextLine();
        System.out.println("Introduce la marca de tu coche:");
        String marca=scn.nextLine();
        System.out.println("Introduce la modelo de tu coche:");
        String modelo=scn.nextLine();
        System.out.println("Introduce el deposito de tu coche:");
        Double deposito=scn.nextDouble();
        scn.nextLine();
        System.out.println("Introduce la ruta del archivo destino:");
        String rutaDes=scn.nextLine();
        
        Coche coche=new Coche(matricula, marca, deposito, modelo);
        escribirFichero(rutaDes, coche);
        leerFichero(rutaDes);
    }
    
    
    public static void escribirFichero(String rutDes, Coche coche) {
        try {
        	DataOutputStream writer = new DataOutputStream(new FileOutputStream(rutDes));
        	writer.writeUTF(coche.matricula);
        	writer.writeUTF(coche.marca);
        	writer.writeUTF(coche.modelo);
            writer.writeDouble(coche.deposito);
            System.out.println("Texto escrito exitosamente en " + rutDes);
        } catch (IOException e) {
            System.err.println("Error al escribir en el fichero: " + e.getMessage());
        }
    }
    
    public static void leerFichero(String ruta) {
        try (DataInputStream reader = new DataInputStream(new FileInputStream(ruta))) {
            System.out.println("Contenido del fichero:");
            while (reader.available() > 0) {
                String matricula = reader.readUTF();
                String marca = reader.readUTF();
                String modelo = reader.readUTF();
                double deposito = reader.readDouble();

                System.out.println("Coche: Matrícula = " + matricula + ", Marca = " + marca +
                                   ", Modelo = " + modelo + ", Depósito = " + deposito);
            }
        } catch (IOException e) {
            System.err.println("Error al leer el fichero: " + e.getMessage());
        }
    }
    
    
}
