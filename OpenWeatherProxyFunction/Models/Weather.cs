namespace OpenWeatherProxyFunction.Models;

public class Weather
{
    public int Id { get; set; } // never going to use this but might be worth it in the future dunno
    public required string Name { get; set; }
    public required Main Main { get; set;  }
}