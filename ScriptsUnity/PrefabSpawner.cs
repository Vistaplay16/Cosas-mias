using UnityEngine;

public class PrefabSpawner : MonoBehaviour
{
    public GameObject prefab;  // Prefab a instanciar
    public Transform spawnPoint; // Posición donde aparecerá
    public float spawnInterval = 2f; // Tiempo entre spawns

    void Start()
    {
        InvokeRepeating("SpawnPrefab", 0f, spawnInterval); // Repite la función cada cierto tiempo
    }

    void SpawnPrefab()
    {
        if (prefab != null && spawnPoint != null)
        {
            Instantiate(prefab, spawnPoint.position, Quaternion.identity);
        }
    }
}
