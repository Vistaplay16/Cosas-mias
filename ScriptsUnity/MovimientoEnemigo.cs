using UnityEngine;

public class EnemyMovement : MonoBehaviour
{
    //CREAMOS UN EMPTY OBJECT (posIni), LO COLOCAMOS DONDE QUEREMOS QUE EMPIEZE A MOVERSE EL ENEMIGO Y ARRASTRAMOS EL OBJECT A ESTA VARIABLE EN EL INSPECTOR
    public Transform posIni;  // Posición inicial

    //CREAMOS UN EMPTY OBJECT (posFin), LO COLOCAMOS DONDE QUEREMOS QUE ACABE DE MOVERSE EL ENEMIGO Y ARRASTRAMOS EL OBJECT A ESTA VARIABLE EN EL INSPECTOR
    public Transform posFin;    // Posición final
    public float velocidad = 2f;      // Velocidad de movimiento

    private Vector3 target; // Objetivo actual

    void Start()
    {
        transform.position= posIni.position; 
        target = posFin.position; // Comienza moviéndose hacia el punto final
    }

    void Update()
    {
        // Mover al enemigo hacia el objetivo
        transform.position = Vector3.MoveTowards(transform.position, target, velocidad * Time.deltaTime);

        // Si llega al objetivo, cambia de dirección
        if (Vector3.Distance(transform.position, target) < 0.1f)
        {
            if (target == posIni.position)
            {
                target = posFin.position; // Si está en la posición inicial, va a la posición final
            }
            else
            {
                target = posIni.position; // Si está en la posición final, va a la posición inicial
            }        
        }
    }
}
