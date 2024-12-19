namespace backendAPI.Models  // Asegúrate de que el espacio de nombres sea consistente
{
public class Client
{
    public int Id { get; set; }
    public required string Nombre { get; set; }
    public required string Correo { get; set; }
    public required string Telefono { get; set; }
    public required string Pais { get; set; }

}

}
