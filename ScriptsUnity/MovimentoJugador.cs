using UnityEngine;

public class MovimentoJugador : MonoBehaviour
{
    //VARIABLE VELOCIDAD
    public float velocidad = 5f;

    //VARIABLE SALTO
    public float salto = 8f;
    private Rigidbody2D rb;
    private bool isGrounded;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        // Movimiento horizontal

        float moveInput = Input.GetAxis("Horizontal");
        /*
        Input.GetAxis("Horizontal") lee el teclado (A/D o Flechas ←/→).
        Devuelve -1 si presionas A o ← (izquierda).
        Devuelve 1 si presionas D o → (derecha).
        Devuelve 0 si no presionas nada.
        */

        rb.velocity = new Vector2(moveInput * velocidad, rb.velocity.y);

        // Salto
        if (Input.GetKeyDown(KeyCode.Space) && isGrounded)
        {
            rb.velocity = new Vector2(rb.velocity.x, salto);
        }
    }

    //EVENTO QUE SE LLAMA CUNADO EMPIEZA UNA COLISION
    void OnCollisionEnter2D(Collision2D collision)
    {
        //CON ESTO COMPRUEBO QUE ESTA COLISIONANDO CON EL SUELO, PERO PUEDO COMPROBAR EL OBJETO QUE QUIERA CAMBIANDO EL TAG 
        if (collision.gameObject.CompareTag("suelo"))
        {
            isGrounded = true;
        }
    }

    void OnCollisionExit2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("suelo"))
        {
            isGrounded = false;
        }
    }
}
